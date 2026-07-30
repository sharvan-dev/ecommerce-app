import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'
import razorpay from 'razorpay'
import crypto from 'crypto'

// globlal variables
const currency = 'inr'
const deliveryCharge = 10

const sanitizeEnvValue = (value) => (typeof value === 'string' ? value.trim().replace(/^['"]|['"]$/g, '') : '')

const getRazorpayConfig = () => ({
    keyId: sanitizeEnvValue(process.env.RAZORPAY_KEY_ID),
    keySecret: sanitizeEnvValue(process.env.RAZORPAY_KEY_SECRET)
})

// gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const buildRazorpayInstance = () => {
    const { keyId, keySecret } = getRazorpayConfig()
    return new razorpay({ key_id: keyId, key_secret: keySecret })
}

const razorpayInstance = buildRazorpayInstance()

// Placing orders using COD Method
const placeOrder = async (req, res) => {

    try {

        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({ success: true, message: "Order Placed" })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }

}

// Placing orders using Stripe Method
const placeOrderStripe = async (req, res) => {
    try {

        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        const line_items = items.map((item) => ({
           price_data: {
                currency:currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
           } ,
           quantity: item.quantity
        }))

        line_items.push({
             price_data: {
                currency:currency,
                product_data: {
                    name: 'Delivery Charges'
                },
                unit_amount: deliveryCharge * 100
           } ,
           quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        })

        res.json({success: true, session_url:session.url})

    } catch (error) {
       console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// verify Stripe
const verifyStripe = async (req, res) => {

    const {orderId, success, userId } = req.body

    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true});
            await userModel.findByIdAndUpdate(userId, { cartData: {}})
            res.json({success: true});
        } else {
            await orderModel.findByIdAndDelete(orderId)
            res.json({success: false})
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message})
        
    }

}

// Placing orders using Razorpay Method
const placeOrderRazopay = async (req, res) => {
    try {
        
      const { userId, items, amount, address } = req.body

        console.log('Razorpay Order Creation Data:');
        console.log('UserId:', userId);
        console.log('Amount:', amount);
        console.log('Items:', items);
        console.log('Address:', address);

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Razorpay",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()
        console.log('MongoDB Order created with ID:', newOrder._id.toString());

        const { keyId, keySecret } = getRazorpayConfig()
        if (!keyId || !keySecret || keyId.includes('your_') || keySecret.includes('your_')) {
            await orderModel.findByIdAndDelete(newOrder._id)
            return res.status(500).json({ success: false, message: 'Razorpay API credentials are not configured properly. Please set valid Razorpay test keys in backend/.env.' })
        }

        const options = {
            amount: amount * 100, // Convert to paise
            currency: currency.toUpperCase(),
            receipt: newOrder._id.toString()
        }

        console.log('Razorpay Order Options:', options);

        try {
            const order = await razorpayInstance.orders.create(options);
            console.log('Razorpay Order Created Successfully:', order);
            return res.json({ success: true, order });
        } catch (razorpayError) {
            console.log('Razorpay Order Creation Error:', razorpayError);
            await orderModel.findByIdAndDelete(newOrder._id);

            const message = razorpayError?.statusCode === 401 || razorpayError?.error?.code === 'BAD_REQUEST_ERROR'
                ? 'Razorpay authentication failed. Please verify the Razorpay API key ID and secret in backend/.env.'
                : razorpayError?.error?.description || razorpayError?.message || 'Razorpay order creation failed';

            return res.status(401).json({ success: false, message });
        }

    } catch (error) {
        console.log('General Error in placeOrderRazorpay:', error)
        res.json({ success: false, message: error.message})
    }
}

const verifyRazorpay = async (req, res) => {
    try {
        const { userId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

        console.log('Razorpay Verification Data:');
        console.log('Razorpay Order ID:', razorpay_order_id);
        console.log('Payment ID:', razorpay_payment_id);
        console.log('Received Signature:', razorpay_signature);

        // First fetch order details to get the original order_id (receipt)
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        console.log('Order Info:', orderInfo);
        
        // Manual signature verification using Razorpay documentation approach
        // Generate signature using razorpay_order_id + "|" + razorpay_payment_id
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        console.log('Body for signature:', body);
        console.log('Expected signature:', expectedSignature);
        console.log('Received signature:', razorpay_signature);
        
        const isValidSignature = expectedSignature === razorpay_signature;
        console.log('Signature validation result:', isValidSignature);

        if (isValidSignature) {
            // Payment signature is valid
            if (orderInfo.status === 'paid') {
                // Update order payment status using the original order_id (receipt)
                const order_id = orderInfo.receipt;
                await orderModel.findByIdAndUpdate(order_id, { payment: true});
                // Clear user cart
                await userModel.findByIdAndUpdate(userId, { cartData: {}})
                console.log('Payment verified successfully for order:', order_id);
                res.json({success: true, message: "Payment Successful"})
            } else {
                console.log('Order status is not paid:', orderInfo.status);
                res.json({success: false, message: "Payment verification failed - order not paid"});
            }
        } else {
            console.log('Signature verification failed using Razorpay SDK');
            res.json({success: false, message: "Payment verification failed - invalid signature"});
        }

    } catch (error) {
       console.log('Razorpay verification error:', error)
        res.json({ success: false, message: error.message}) 
    }
}

// All orders data for Admin Panel
const alloreders = async (req, res) => {

    try {

        const orders = await orderModel.find({})
        res.json({ success: true, orders })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// User order Data For Frontend
const userOrders = async (req, res) => {
    try {

        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// update order status from Admin Panel
const updateStatus = async (req, res) => {
    try {

        const { orderId, status } = req.body

        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({ success: true, message: 'Status Updated' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {verifyRazorpay, verifyStripe, placeOrder, placeOrderStripe, placeOrderRazopay, alloreders, userOrders, updateStatus }
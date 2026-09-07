import validator from 'validator'
import subscriberModel from '../models/subscriberModel.js'

const subscribeToNewsletter = async (req, res) => {
    try {
        const email = req.body.email?.trim().toLowerCase()

        if (!email || !validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid email address.' })
        }

        const existingSubscriber = await subscriberModel.findOne({ email })

        if (existingSubscriber) {
            return res.json({
                success: true,
                message: 'This email is already subscribed. Your 15% offer is still available.',
                offerCode: existingSubscriber.offerCode
            })
        }

        const subscriber = await subscriberModel.create({ email })

        return res.status(201).json({
            success: true,
            message: 'You are subscribed. Use your 15% offer at checkout.',
            offerCode: subscriber.offerCode
        })
    } catch (error) {
        if (error.code === 11000) {
            return res.json({
                success: true,
                message: 'This email is already subscribed. Your 15% offer is still available.',
                offerCode: 'LOOM15'
            })
        }

        console.error(error)
        return res.status(500).json({ success: false, message: 'Unable to complete your subscription right now.' })
    }
}

export { subscribeToNewsletter }

import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"

// function for add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body

        // Validate required fields
        if (!name || !description || !price || !category || !subCategory || !sizes) {
            return res.json({ success: false, message: "All required fields must be provided" });
        }

        // Handle image uploads
        const images = [];
        for (let i = 1; i <= 4; i++) {
            const imageField = `image${i}`;
            if (req.files && req.files[imageField] && req.files[imageField][0]) {
                try {
                    const result = await cloudinary.uploader.upload(req.files[imageField][0].path, 
                        { resource_type: 'image' }
                    );
                    images.push(result.secure_url);
                } catch (error) {
                    console.error(`Error uploading ${imageField}:`, error);
                    return res.json({ 
                        success: false, 
                        message: `Error uploading ${imageField}. Please try again.` 
                    });
                }
            }
        }

        if (images.length === 0) {
            return res.json({ 
                success: false, 
                message: "At least one product image is required" 
            });
        }

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: Boolean(bestseller),
            sizes: JSON.parse(sizes),
            image: images,
            date: Date.now()
        }

        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Product Added Successfully" });

    } catch (error) {
        console.error('Product addition error:', error);
        res.json({
            success: false,
            message: error.message || "Error adding product. Please try again."
        });
    }
}

// function for list product
const listProduct = async (req, res) => {
    try {
        
        const products = await productModel.find({});
        res.json({success:true,products}) 

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// function for removing product
const removeProduct = async (req, res) => {
   try {
    
     await productModel.findByIdAndDelete(req.body.id)
     res.json({success:true,message:"Product Removed"})

   } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
   } 
}

// function for single product info
const singleProduct = async (req, res) => {
    try {
        
        const { productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export { listProduct, addProduct, removeProduct, singleProduct }
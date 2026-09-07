import mongoose from 'mongoose'

const subscriberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    offerCode: { type: String, required: true, default: 'LOOM15' },
    subscribedAt: { type: Date, default: Date.now }
}, { timestamps: true })

const subscriberModel = mongoose.models.subscriber || mongoose.model('subscriber', subscriberSchema)

export default subscriberModel

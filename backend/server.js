import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


const app = express()
const initialPort = Number(process.env.PORT || 4000)

connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.status(200).send('API Working')
})

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' })
})

const startServer = (port = initialPort) => {
    const server = app.listen(port, () => {
        console.log('Server started PORT : ' + port)
    })

    server.on('error', (error) => {
        if (error.code === 'EADDRINUSE') {
            const nextPort = port + 1
            console.warn(`Port ${port} is busy, trying ${nextPort}...`)
            startServer(nextPort)
            server.close()
        } else {
            console.error(error)
            process.exit(1)
        }
    })
}

if (process.env.NODE_ENV !== 'production' || process.env.VERCEL !== '1') {
    startServer()
}

export default app
export const handler = app

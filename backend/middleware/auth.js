import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    const headerToken = req.headers?.token || req.headers?.authorization || req.headers?.Authorization

    const token = typeof headerToken === 'string'
        ? headerToken.startsWith('Bearer ') ? headerToken.slice(7).trim() : headerToken.trim()
        : ''

    if (!token) {
        return res.status(401).json({ success: false, message: 'Not Authorized, Login Again' })
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id || token_decode._id
        next()
    } catch (error) {
        console.log('Auth failed:', error)
        return res.status(401).json({ success: false, message: 'Not Authorized, Login Again' })
    }
}

export default authUser
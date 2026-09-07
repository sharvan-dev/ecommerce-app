import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.json({ success: false, message: "Not Authorized, Login Again" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'admin') {
            return res.json({ success: false, message: "Not Authorized, Login Again" });
        }
        req.admin = decoded
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const addProductAuth = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.json({ success: false, message: 'Not Authorized, Login Again' })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!['admin', 'add-product'].includes(decoded.role)) {
            return res.json({ success: false, message: 'Not Authorized, Login Again' })
        }

        req.admin = decoded
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addProductAuth }
export default adminAuth;
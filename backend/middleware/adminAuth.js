import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.json({ success: false, message: "Not Authorized, Login Again" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Check if decoded payload matches admin credentials
        if (
            decoded.email !== process.env.ADMIN_EMAIL ||
            (process.env.ADMIN_PASSWORD && decoded.password !== process.env.ADMIN_PASSWORD)
        ) {
            return res.json({ success: false, message: "Not Authorized, Login Again" });
        }
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export default adminAuth;
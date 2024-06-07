const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    const {token} = req.cookies;

    if(!token) {
        return res.status(401).json({ message: "No estas autorizado para acceder"});
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        res.status(200).json('middleware funcionando');
    } catch (error) {
        return res.status(401).json({ message: "El token es invalido"});
    }

   
}

module.exports = authenticateUser;
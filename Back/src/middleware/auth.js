const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const decode = jwt.verify(req.body.token, "INVEXTGFOURD62ST92Y7A6V7K5C6W9ZU6W8KS3");
        req.usuario = decode;
        next();
    } catch (error) {
        return res.status(401).json({
            erro: true,
            message: "Falha na autenticação!"
        });
    }
}
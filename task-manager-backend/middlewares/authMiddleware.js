const jwtAdapter = require('../adapters/jwtAdapter');

const authMiddleware = (req, res, next) => {

    const token = req.header('Authorization');

    if(!token) {
        return res.status(401).json({message:  'Acceso denegado. Token no proporcionado.'});
    }

    const formattedToken = token.replace('Bearer', '');

    const decoded = jwtAdapter.verifyToken(formattedToken);

    if(!decoded){
        return res.status(401).json({message: 'Acceso denegado. Token invalido o expirado.'});
    }
}
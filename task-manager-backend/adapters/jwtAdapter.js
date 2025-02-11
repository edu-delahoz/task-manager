const jwt = require('jsonwebtoken');
require('dotenv').config();


class JwtAdapter {

    generateToken(userId){
        return jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:'2h'});
    }


    verifyToken(token){

    try{
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch(err){
        return null
    }
    }
}

module.exports = new JwtAdapter();



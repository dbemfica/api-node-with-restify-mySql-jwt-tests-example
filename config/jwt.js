require('dotenv').config();
const jwt = require("jsonwebtoken");

// prazo de expiração do token
var expiresIn = '24h';

// rotas não verificadas pelo middleware jwtMiddleware
var exclusions = [
    '/autenticacao'
];

module.exports = {
    create: (payload) => {
        let token = jwt.sign(payload, process.env.JWT_KEY,{ expiresIn: expiresIn });
        return token;
    },
    validate: (token) => {
        return jwt.verify(token,process.env.JWT_KEY)
    },
    exclusions: exclusions
};
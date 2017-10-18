const crypto = require('../../../config/crypto');
const jwt = require("../../../config/jwt");
const authModule = deps => {
    return {
        autenticate: (email,password) => {
            return new Promise((resolve,reject) => {
                let { connection, errorHandler } = deps;
                connection.query('SELECT id, email FROM usuarios WHERE email = ? AND password = ?',[email,crypto.encrypt(password)], function (error, results) {
                    if (error || results.length === 0 ){
                        errorHandler(error, 'Usuário não encontrado', reject);
                        return false;
                    }
                    let token = jwt.create({ id: results[0].id, email: results[0].email});
                    resolve( {token: token});
                });
            });
        }
    }
}

module.exports = authModule;
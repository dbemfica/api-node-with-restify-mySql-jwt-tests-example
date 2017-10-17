const crypto = require('../../config/crypto');
const usuarioModule = deps => {
    return {
        all: () => {
            return new Promise((resolve,reject) => {
                let { connection, errorHandler } = deps;
                connection.query('SELECT id, email FROM usuarios', function (error, results) {
                    if (error){
                        errorHandler(error, 'Erro ao listar as usuários', reject);
                        return false;
                    }
                    resolve( {usuarios: results});
                });
            });
        },
        create: (email,password) => {
            return new Promise((resolve,reject) => {
                let { connection, errorHandler } = deps;
                connection.query('INSERT INTO usuarios (email,password) VALUES (?,?)',[email,crypto.encrypt(password)], function (error, results) {
                    if (error){
                        errorHandler(error, 'Erro ao cadastrar a usuário', reject);
                        return false;
                    }
                    resolve( {usuario: { id: results.insertId, email: email}});
                });
            });
        },
        update: (id,password) => {
            return new Promise((resolve,reject) => {
                let { connection, errorHandler } = deps;
                connection.query('UPDATE usuarios SET password = ? WHERE id = ?',[crypto.encrypt(password),id], function (error, results) {
                    if (error || results.affectedRows === 0){
                        errorHandler(error, 'Erro ao atualizar a usuário', reject);
                        return false;
                    }
                    resolve( { affectedRows: results.affectedRows, categoria: { id: id}});
                });
            });
        },
        del: (id) => {
            return new Promise((resolve,reject) => {
                let { connection, errorHandler } = deps;
                connection.query("DELETE FROM usuarios WHERE id = ?",[id], function (error, results) {
                    if (error || results.affectedRows === 0){
                        errorHandler(error, 'Erro ao deletar a usuário', reject);
                        return false;
                    }
                    resolve({ affectedRows: results.affectedRows, menssage: 'Usuário removido com sucesso'});
                });
            });
        }
    }
}

module.exports = usuarioModule;
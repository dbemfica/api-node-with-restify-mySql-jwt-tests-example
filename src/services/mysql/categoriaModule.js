const categoriaModule = deps => {
    return {
        all: () => {
            return new Promise((resolve,reject) => {
                let { connection, errorHandler } = deps;
                connection.query('SELECT * FROM categorias', function (error, results) {
                    if (error){
                        errorHandler(error, 'Erro ao listar as categorias', reject);
                        return false;
                    }
                    resolve( {categorias: results});
                });
            });
        },
        create: (name) => {
            return new Promise((resolve,reject) => {
                let { connection, errorHandler } = deps;
                connection.query('INSERT INTO categorias (name) VALUES (?)',[name], function (error, results) {
                    if (error){
                        errorHandler(error, 'Erro ao cadastrar a categoria', reject);
                        return false;
                    }
                    resolve( {categoria: { id: results.insertId, name: name}});
                });
            });
        },
        update: (id,name) => {
            return new Promise((resolve,reject) => {
                let { connection, errorHandler } = deps;
                connection.query('UPDATE categorias SET name = ? WHERE id = ?',[name,id], function (error, results) {
                    if (error || results.affectedRows === 0){
                        errorHandler(error, 'Erro ao atualizar a categoria', reject);
                        return false;
                    }
                    resolve( { affectedRows: results.affectedRows, categoria: { id: id, name: name}});
                });
            });
        },
        del: (id) => {
            return new Promise((resolve,reject) => {
                let { connection, errorHandler } = deps;
                connection.query("DELETE FROM categorias WHERE id = ?",[id], function (error, results) {
                    if (error || results.affectedRows === 0){
                        errorHandler(error, 'Erro ao deletar a categoria', reject);
                        return false;
                    }
                    resolve({ affectedRows: results.affectedRows, menssage: 'Categoria removido com sucesso'});
                });
            });
        }
    }
}

module.exports = categoriaModule;
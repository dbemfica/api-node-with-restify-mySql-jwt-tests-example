const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE_TEST
});

const errorHandler = (error, mensagem, rejectFunction) => {
    console.error(error);
    rejectFunction({ error: mensagem });
}

module.exports = {
    connection: connection,
    errorHandler: errorHandler
};
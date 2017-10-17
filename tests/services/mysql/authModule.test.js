require('dotenv').config();
const test = require('ava');
const mysql = require("./index");
const connection = mysql.connection;
const errorHandler = mysql.errorHandler;

const usuarioModule = require("../../../src/services/mysql/usuarioModule")({connection, errorHandler});
const authModule = require("../../../src/services/mysql/authModule")({connection, errorHandler});

test.after.always(t => connection.query("TRUNCATE TABLE usuarios"));

test('Teste criação do token', async t => {
   await usuarioModule.create('teste@teste.com','123456');
   const result = await authModule.autenticate('teste@teste.com','123456');
   t.not(result.token,null);
   t.not(result.token.length,0);
});
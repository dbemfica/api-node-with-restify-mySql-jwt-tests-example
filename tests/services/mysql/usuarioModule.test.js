require('dotenv').config();
const test = require('ava');
const mysql = require("./index");
const connection = mysql.connection;
const errorHandler = mysql.errorHandler;

const usuarioModule = require("../../../src/services/mysql/usuarioModule")({connection, errorHandler});

test.after.always(t => connection.query("TRUNCATE TABLE usuarios"));

test('Criação de usuário', async t => {
   const result = await usuarioModule.create('teste@teste.com','123456');
   t.is(result.usuario.email,'teste@teste.com');
});

test('Alteração da usuário', async t => {
    await usuarioModule.create('teste@teste.com','123456');
    const result = await usuarioModule.update(1,'12345678');
    t.is(result.affectedRows,1);
});

test('Deletar a usuário', async t => {
    await usuarioModule.create('teste@teste.com','123456');
    const result = await usuarioModule.del(1);
    t.is(result.affectedRows,1);
});

test('Consultar as usuários', async t => {
    await usuarioModule.create('teste@teste.com','123456');
    const result = await usuarioModule.all();
    t.is(result.usuarios[0].email,'teste@teste.com');
});
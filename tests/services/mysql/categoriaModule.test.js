require('dotenv').config();
const test = require('ava');
const mysql = require("./index");
const connection = mysql.connection;
const errorHandler = mysql.errorHandler;

const categoriaModule = require("../../../src/services/mysql/categoriaModule")({connection, errorHandler});

test.after.always(t => connection.query("TRUNCATE TABLE categorias"));

test('Criação de categorias', async t => {
   const result = await categoriaModule.create('categoria teste');
   t.is(result.categoria.name,'categoria teste');
});

test('Alteração da categoria', async t => {
    await categoriaModule.create('categoria teste');
    const result = await categoriaModule.update(1,'categoria teste 2');
    t.is(result.categoria.name,'categoria teste 2');
    t.is(result.affectedRows,1);
});

test('Deletar a categoria', async t => {
    await categoriaModule.create('categoria teste');
    const result = await categoriaModule.del(1);
    t.is(result.affectedRows,1);
});

test('Consultar as categorias', async t => {
    await categoriaModule.create('categoria teste');
    const result = await categoriaModule.all();
    t.is(result.categorias[0].name,'categoria teste');
});
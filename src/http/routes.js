
const db = require("../services/mysql/index");
const routes = (server) => {

    // ROUTE CATEGORIA - GET
    // Essa rota retorna todas as categorias usando Promises com async e await
    // Você pode usar essa rota ou usar a rota a baixo que usa Promises tradicionais
    server.get('/categoria',async (req,res,next) => {
        try{
            res.send(await db.categoriaModule().all());
        }catch(error) {
            res.send(error);
        }
        next();
    });

    // Essa rota retorna todas as categorias usando Promises tradicionais
    // Você pode usar essa rota ou usar a rota acima que usa Promises com async e await
    // server.get('/categoria',(req,res,next) => {
    //     db.categoriaModule().all().then(categorias => {
    //         res.send(categorias);
    //     }).catch(error => {
    //         res.send(error);
    //     })
    //     next();
    // });

    // ROUTE CATEGORIA - POST
    // Essa rota cria um usuario usando Promises com async e await
    // Você pode usar essa rota ou usar a rota a baixo que usa Promises tradicionais
    server.post('/categoria',async (req,res,next) => {
        let { name } = req.params;
        try{
            res.send(await db.categoriaModule().create(name));
        }catch(error) {
            res.send(error);
        }
        next();
    });

    // Essa rota cria um categorias Promises tradicionais
    // Você pode usar essa rota ou usar a rota acima que usa Promises com async e await
    // server.post('/categoria',(req,res,next) => {
    //     let { name } = req.params;
    //     db.categoriaModule().create(name).then(categorias => {
    //         res.send(categorias);
    //     }).catch(error => {
    //         res.send(error);
    //     })
    //     next();
    // });

    // ROUTE CATEGORIA - PUT
    // Essa rota fas o atualização da categoria usando Promises com async e await
    // Você pode usar essa rota ou usar a rota a baixo que usa Promises tradicionais
    server.put('/categoria',async (req,res,next) => {
        let { id, name } = req.params;
        try{
            res.send(await db.categoriaModule().update(id, name));
        }catch(error) {
            res.send(error);
        }
        next();
    });

    // Essa rota fas o atualização da categoria usando Promises tradicionais
    // Você pode usar essa rota ou usar a rota acima que usa Promises com async e await
    // server.put('/categoria',(req,res,next) => {
    //     let { id, name } = req.params;
    //     db.categoriaModule().update(id, name).then(categorias => {
    //         res.send(categorias);
    //     }).catch(error => {
    //         res.send(error);
    //     })
    //      next();
    // });

    // ROUTE CATEGORIA - DELETE
    // Essa rota deleta a categoria usando Promises com async e await
    // Você pode usar essa rota ou usar a rota a baixo que usa Promises tradicionais
    server.del('/categoria',async (req,res,next) => {
        let { id } = req.params;
        try{
            res.send(await db.categoriaModule().del(id));
        }catch(error) {
            res.send(error);
        }
        next();
    });

    // Essa rota deleta a categoria usando Promises tradicionais
    // Você pode usar essa rota ou usar a rota acima que usa Promises com async e await
    // server.del('/categoria',(req,res,next) => {
    //     let { id } = req.params;
    //     db.categoriaModule().del(id).then(categorias => {
    //         res.send(categorias);
    //     }).catch(error => {
    //         res.send(error);
    //     })
    //     next();
    // });


    // ROUTE USUARIO - GET
    // Essa rota retorna todos os usuarios usando Promises com async e await
    // Você pode usar essa rota ou usar a rota a baixo que usa Promises tradicionais
    server.get('/usuario',async (req,res,next) => {
        try{
            res.send(await db.usuarioModule().all());
        }catch(error) {
            res.send(error);
        }
        next();
    });

    // Essa rota retorna todos os usuarios usando Promises tradicionais
    // Você pode usar essa rota ou usar a rota acima que usa Promises com async e await
    // server.get('/usuario',(req,res,next) => {
    //     db.usuarioModule().all().then(usuarios => {
    //         res.send(usuarios);
    //     }).catch(error => {
    //         res.send(error);
    //     })
    //     next();
    // });

    // ROUTE USUARIO - POST
    // Essa rota cria um usuario usando Promises com async e await
    // Você pode usar essa rota ou usar a rota a baixo que usa Promises tradicionais
    server.post('/usuario',async (req,res,next) => {
        let { email, password } = req.params;
        try{
            res.send(await db.usuarioModule().create(email, password));
        }catch(error) {
            res.send(error);
        }
        next();
    });

    // Essa rota cria um usuario usando Promises tradicionais
    // Você pode usar essa rota ou usar a rota acima que usa Promises com async e await
    // server.post('/usuario',(req,res,next) => {
    //     let { email, password } = req.params;
    //     db.usuarioModule().create(email, password).then(usuarios => {
    //         res.send(usuarios);
    //     }).catch(error => {
    //         res.send(error);
    //     })
    //     next();
    // });

    // ROUTE USUARIO - PUT
    // Essa rota fas o atualização da usuario usando Promises com async e await
    // Você pode usar essa rota ou usar a rota a baixo que usa Promises tradicionais
    server.put('/usuario',async (req,res,next) => {
        let { id, password } = req.params;
        try{
            res.send(await db.usuarioModule().update(id, password));
        }catch(error) {
            res.send(error);
        }
        next();
    });

    // Essa rota fas o atualização da usuario usando Promises tradicionais
    // Você pode usar essa rota ou usar a rota acima que usa Promises com async e await
    // server.put('/usuario',(req,res,next) => {
    //     let { id, password } = req.params;
    //     db.usuarioModule().update(id,password).then(usuarios => {
    //         res.send(usuarios);
    //     }).catch(error => {
    //         res.send(error);
    //     })
    //      next();
    // });

    // ROUTE USUARIO - DELETE
    // Essa rota deleta o usuario usando Promises com async e await
    // Você pode usar essa rota ou usar a rota a baixo que usa Promises tradicionais
    server.del('/usuario',async (req,res,next) => {
        let { id } = req.params;
        try{
            res.send(await db.usuarioModule().del(id));
        }catch(error) {
            res.send(error);
        }
        next();
    });

    // Essa rota deleta o usuario usando Promises tradicionais
    // Você pode usar essa rota ou usar a rota acima que usa Promises com async e await
    // server.del('/usuario',(req,res,next) => {
    //     let { id } = req.params;
    //     db.categoriaModule().del(id).then(usuarios => {
    //         res.send(usuarios);
    //     }).catch(error => {
    //         res.send(error);
    //     })
    //     next();
    // });

    // ROUTE AUTENTICACAO - POST
    // Essa rota retorna o token usando Promises com async e await
    // Você pode usar essa rota ou usar a rota a baixo que usa Promises tradicionais
    server.post('/autenticacao',async (req,res,next) => {
        let { email,password } = req.params;
        try{
            res.send(await db.authModule().autenticate(email,password));
        }catch(error) {
                res.send(error);
            }
        next();
    });

    // Essa rota retorna o token Promises tradicionais
    // Você pode usar essa rota ou usar a rota acima que usa Promises com async e await
    // server.post('/autenticacao',(req,res,next) => {
    //     let { email,password } = req.params;
    //     db.authModule().autenticate(email,password).then(token => {
    //         res.send(token);
    //     }).catch(error => {
    //         res.send(error);
    //     })
    //     next();
    // });
}

module.exports = routes;
const jwt = require("../../../config/jwt");
const jwtMiddleware = () => {
    return async (req,res,next) => {
        if( jwt.exclusions.includes(req.href()) === false ){
            if( req.headers['x-access-token'] === undefined ){
                res.send(403,{error:'Token não fornecido'});
                return false;
            }
            try{
                req.token = await jwt.validate(req.headers['x-access-token'])
            }catch(error){
                res.send(403,{error:'Token fornecido está invalido'});
                return false;
            }
        }
        next();
    }
}
module.exports = jwtMiddleware;
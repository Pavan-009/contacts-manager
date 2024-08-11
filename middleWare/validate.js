const handler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = handler(async(req,res,next)=>{
        let token ;
        let authHeader  = req.headers.authorization||req.headers.Authorization
        if(authHeader && authHeader.startsWith("Bearer")){
            token = authHeader.split(" ")[1];
            jwt.verify(token,process.env.ACCESS_TOKEN,(err,decoded)=>{
                if(err){
                    res.status(401);
                    throw new Error(`User is Not authorized!!!`);
                }
                else{
                    req.user = decoded.user;
                    next();
                }
            });
            if(!token){
                res.status(401)
                throw new Error(`User not authorized`);
                
            }
        }
});

module.exports = validateToken;
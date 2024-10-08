const constants  = require('../constants');


const errorHandler = (err,req,res,next)=>{
    const statuscode = res.statuscode ? res.statuscode :  res.statuscode = "500";

    switch (statuscode) {
        case constants.NOT_FOUND:
            res.json({title : "Not Found",message : err.message,stackTrace : err.stack})
            break;
        case constants.FORBIDDEN:
            res.json({title : "Forbidden",message : err.message,stackTrace : err.stack})
            break;
        case constants.UNAUTHORIZED:
            res.json({title : "Unauthorized",message : err.message,stackTrace : err.stack})
            break;
        case constants.VALIDATION_ERROR:
            res.json({title : "Validation Error",message : err.message,stackTrace : err.stack})
            break;
        default:
            console.log(`No Error All Good!!!`)
            break;
    }
    res.json({message : err.message,stackTrace : err.stack});
}

module.exports = errorHandler;
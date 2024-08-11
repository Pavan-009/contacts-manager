const express = require('express');
const { registerUser, loginuser,currentIfo } = require('../contactController/userController');
const {validateToken} = require('../middleWare/validate');

const router = express.Router();

router.post('/register',registerUser)

router.post('/login',loginuser)

router.get('/current',validateToken,currentIfo)


module.exports = router;
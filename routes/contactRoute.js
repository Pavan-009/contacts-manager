const express = require('express');
const router = express.Router();

const {deleteContact,createContact,getContact,getallcontacts,updateContact} = require('../contactController/contactController');
const validateToken = require('../middleWare/validate');

router.use(validateToken);

router.route('/').get(getallcontacts).post(createContact);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)


module.exports = router;
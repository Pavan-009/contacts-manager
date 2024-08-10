const express = require('express');
const router = express.Router();

const {updateContact,deleteContact,createContact,getContact,getallcontacts} = require('../contactController/contactController')

router.route('/').get(getallcontacts).post(createContact);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)


module.exports = router;
const express = require('express');
const router = express.Router();

const {updateContact,deleteContact,createContact,getContact,getallcontacts} = require('../contactController/contactController')

router.route('/').get(getallcontacts).post(createContact);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)


router.route('/').get((req,res)=>{
    res.send({"name" : "Pavan Kumar"});
});

router.route('/').get((req,res)=>{
    res.send({"name" : "Pavan Kumar"});
});

module.exports = router;
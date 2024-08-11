const hadler = require('express-async-handler');
const contact = require('../models/contactmodel');
//getall contacts

const getallcontacts = hadler(async(req,res)=>{
    const findContact = await contact.find();
    res.send(findContact);  
});

//findContact

const getContact = hadler(async(req,res)=>{
    const findContact = await contact.findById(req.params.id);
    console.log(findContact)
    if(!findContact){
        res.status(400);
        throw new Error(`Contact Not Found!!!`)
    }
    res.status(200).json(findContact);
});

//CreateContact

const createContact = hadler(async(req,res)=>{
    let {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error(`All the fields are mandatory!!!!`);
    }
    const contactCreate = await contact.create({
        name,
        email,
        phone
    });
    res.status(200).json({message:"Contact Created Sucessfully",details:contactCreate})
});

// delete contact
const deleteContact = hadler(async(req,res)=>{
    const deleteTheContact = await contact.findById(req.params.id);
    if(!deleteTheContact){
        res.status(404);
        throw new Error(`Contact Not Found`)
    }
    await contact.deleteOne(deleteTheContact);  //using deleteOne() as remove() method is depricated from officaial documnetation
    res.status(200).json({message : `Deleted Sucessfully ${deleteTheContact}`});
});

// update contact 

const updateContact = hadler(async(req,res)=>{
    const Updatecontact = await contact.findById(req.params.id);
    if(!Updatecontact){
        res.status(404);
        throw new Error(`Contact Not Found`)
    }
    const updateTheContact = await contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json({message :`Updated sucessfully`+Updatecontact});
});

module.exports = {deleteContact,createContact,getContact,getallcontacts,updateContact}
//getall contacts

const getallcontacts = (req,res)=>{
    res.send({"response" : "Fetched all contacts Sucessfully"});
};

//findContact

const getContact = (req,res)=>{
    
    res.send({"response" : "Contact found"});
};

//CreateContact

const createContact = (req,res)=>{
    let {email,name,contact} = req.body;
    if(!email || !name || !contact){
        res.status(400);
        throw new Error(`All the fields are mandatory!!!!`);
    }
    res.send({"response" : "Contact Created Sucessfully"});
};

// delete contact

const deleteContact = (req,res)=>{
    console.log( `The request body is${req.body}`);
    res.send({"response" : "Contact with id ${} deleted Sucessfully"});
};

// update contact 

const updateContact = (req,res)=>{
    console.log( `The request body is${req.body}`);
    res.send({"response" : "Contact updated Sucessfully"});
};

module.exports = {updateContact,deleteContact,createContact,getContact,getallcontacts}
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
    res.send({"response" : "Contact Created Sucessfully"});
};

// delete contact

const deleteContact = (req,res)=>{
    res.send({"response" : "Contact deleted Sucessfully"});
};

// update contact 

const updateContact = (req,res)=>{
    res.send({"response" : "Contact updated Sucessfully"});
};

module.exports = {updateContact,deleteContact,createContact,getContact,getallcontacts}
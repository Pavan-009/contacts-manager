const hadler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { decrypt } = require('dotenv');
//getall contacts


const registerUser = hadler(async(req,res)=>{
   const {username,email,password} = req.body;
   if(!username || !email || !password){
        res.status(400);
        throw new Error(`All fields are mandatory!!!`);
   } 
   const useralReadyExist = await User.findOne({email});
   if(useralReadyExist){
    res.status(400);
    throw new Error(`User email already in use!!!`);
   }
   //hashing a password!!!
   const hashPassword = await bcrypt.hash(password,10);
   const user = await User.create({
    username : username,
    email : email,
    password : hashPassword,
   });
   if(user){
    res.status(201).json({_id : user.id,email : user.email});
   }
   else{
    res.status(400)
    throw new Error({status : `Invalid Request!!!`});

   }
   console.log(`user Created Successfully`+user);
   
});

const loginuser =  hadler(async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error(`Login Failed`)
    }
    const userhere = await User.findOne({email});
    const comparedPassword = await bcrypt.compare(password,userhere.password)
    if(userhere && comparedPassword){
        const token = jwt.sign({
            user:{
                username : userhere.name,
                email : userhere.email,
                id : userhere.id
            },
        },process.env.ACCESS_TOKEN,{expiresIn:"1m"})
        res.status(200).json({token});
    }
    else{
        res.status(401)
        throw new Error(`OOps email or password is not valid!!!`)
    } 
});

const currentIfo =  hadler(async(req,res)=>{
    const currentUser = await contact.find();
    res.send(currentUser);  
});

module.exports = {registerUser,loginuser,currentIfo}
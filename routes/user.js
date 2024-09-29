const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jwt');
const Users = require("models\Users.js");


const router = express.router();

router.post('/signup', async(req, res) =>{
    const {username, password} = req.body;
    try{
        const hashpassword =  await bcrypt.hash(password, 10)
        const users = await Users.create({username: username, password: hashpassword})
        res.status(201).json({message:"sucessfull signup is created", Users: users})
    } catch(error){
        console.log("errors occurs")
    }
})

router.post('/login',async(res, req) =>{
    const{username, password} = req.body;
    try{
        const hashpassword = await bcrypt.hash(password,10)
        const users = await Users.create({username: username, password: hashpassword})
        res.status(200).json({message:"sucessfull login page", Users:users})
    }catch(error){
        console.log("errors occurs")
    }
    
} )
















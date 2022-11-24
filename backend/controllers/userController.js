const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
 
const getUsers =  asyncHandler( async (req, res)=>{
    const users = await User.find() 
    res.status(200).json(users)
})

const getMe = asyncHandler(async( req, res)=> { 
    const {_id, name, email } = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name,
        email,
    })
});

const login = asyncHandler(async( req, res)=> { 
    const { name, email, password }  = req.body;
    const user = await User.findOne({email});
    if(user && await bcrypt.compare(password, user.password)) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid user data ')
    }
 
    
});

const registerUser = asyncHandler( async (req, res)=>{ 
    const { name, email, password }  = req.body;
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please enter all fields')
    }

    const userExist = await User.findOne({email})

    if(userExist) {
        res.status(400)
        throw new Error('User already exisit')
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    
    
    const user = await User.create({
        name:name,
        email:email,
        password:hashPassword,
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id) 
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const updateUser =  asyncHandler( async (req, res)=>{
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedUser)
})

const deleteUser =  asyncHandler( async (req, res)=>{
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }

    const deletedUser = await user.remove();
    res.status(200).json({"msg":`${ deletedUser['name']  } User deleted` })
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

module.exports = {
    getUsers,
    updateUser, 
    registerUser,
    deleteUser,
    login,
    getMe,
}
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
 
const getUsers =  asyncHandler( async (req, res)=>{
    const users = await User.find() 
    res.status(200).json(users)
})

const createUser = asyncHandler( async (req, res)=>{ 
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please enter name')
    }
    if(!req.body.email) {
        res.status(400)
        throw new Error('Please enter email')
    }
    if(!req.body.password) {
        res.status(400)
        throw new Error('Please enter password')
    }
    
    const user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    }) 
    res.status(203).json(user)
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




module.exports = {
    getUsers,
    updateUser, 
    createUser,
    deleteUser
}
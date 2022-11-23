const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel')

const getGoals =  asyncHandler( async (req, res)=>{
    const goals = await Goal.find() 
    res.status(200).json(goals)
})

const createPost = asyncHandler( async (req, res)=>{ 
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please enter name')
    }
    
    const goal = await Goal.create({
        name:req.body.name
    }) 
    res.status(203).json(goal)
})

const udpatePost =  asyncHandler( async (req, res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const udpateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(udpateGoal)
})

const deletePost =  asyncHandler( async (req, res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const udpateGoal = await goal.remove();
    res.status(200).json({"msg":'Goal deleted'})
})




module.exports = {
    getGoals,
    createPost,
    udpatePost,
    deletePost,
}
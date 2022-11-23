const asyncHandler = require('express-async-handler')

const getGoals =  asyncHandler( async (req, res)=>{
    const msg = 'get goals'
    res.status(200).json({msg})
})

const createPost = asyncHandler( async (req, res)=>{ 
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please enter name')
    }

    const msg = 'create goals'
    res.status(200).json({msg})
})

const udpatePost =  asyncHandler( async (req, res)=>{
    
    const msg = `update golas ${req.params.id}`
    res.status(200).json({msg})
})

const deletePost =  asyncHandler( async (req, res)=>{
    const msg = `delete golas ${req.params.id}` 
    res.status(200).json({msg})
})




module.exports = {
    getGoals,
    createPost,
    udpatePost,
    deletePost,
}
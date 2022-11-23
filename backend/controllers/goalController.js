const getGoals =  (req, res)=>{
    const msg = 'get goals'
    res.status(200).json({msg})
}

const createPost = (req, res)=>{
    console.log(`msg_ req.body`,req.body);
    const msg = 'create goals'
    res.status(200).json({msg})
}

const udpatePost =  (req, res)=>{
    const msg = `update golas ${req.params.id}`
    res.status(200).json({msg})
}

const deletePost =  (req, res)=>{
    const msg = `delete golas ${req.params.id}` 
    res.status(200).json({msg})
}




module.exports = {
    getGoals,
    createPost,
    udpatePost,
    deletePost,
}
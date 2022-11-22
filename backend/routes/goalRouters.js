const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    const msg = 'get goals'
    res.status(200).json({msg})
})

router.post('/', (req, res)=>{
    const msg = 'create goals'
    res.status(200).json({msg})
})

router.put('/:id', (req, res)=>{
    const msg = `update golas ${req.params.id}`
    res.status(200).json({msg})
})

router.delete('/:id', (req, res)=>{
    const msg = `delete golas ${req.params.id}` 
    res.status(200).json({msg})
})


module.exports = router
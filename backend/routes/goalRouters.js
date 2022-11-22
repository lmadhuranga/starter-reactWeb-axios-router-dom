const express = require('express')
const router = express.Router()
const { getGoals,
     createPost,
     udpatePost,
     deletePost 
} = require('../controllers/goalController')

router.get('/', getGoals)

router.post('/', createPost)

router.put('/:id', udpatePost)

router.delete('/:id', deletePost)


module.exports = router
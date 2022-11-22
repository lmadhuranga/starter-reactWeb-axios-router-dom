const express = require('express')
const router = express.Router()
const { getGoals,
     createPost,
     udpatePost,
     deletePost 
} = require('../controllers/goalController')

router.get('/', getGoals).post('/', createPost)

router.put('/:id', udpatePost).delete('/:id', deletePost)


module.exports = router
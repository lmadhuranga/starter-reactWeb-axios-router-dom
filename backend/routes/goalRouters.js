const express = require('express')
const router = express.Router()
const { getGoals,
     createPost,
     udpatePost,
     deletePost 
} = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getGoals).post('/', protect, createPost)

router.put('/:id', protect, udpatePost).delete('/:id', protect, deletePost)


module.exports = router
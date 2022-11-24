const express = require('express');
const router = express.Router();
const { 
        getUsers, 
        updateUser,
        deleteUser,
        getMe,
        login,
        registerUser
    }  = require('../controllers/userController')

const { protect }  = require('../middleware/authMiddleware')
    
router.get('/me', protect, getMe)
router.post('/login', login)
router.get('/', getUsers).post('/', registerUser)
router.put('/:id', updateUser).delete('/:id', deleteUser)


module.exports = router;
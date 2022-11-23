const express = require('express');
const router = express.Router();
const { 
        getUsers,
        createUser,
        updateUser,
        deleteUser
    }  = require('../controllers/userController')

 
router.get('/', getUsers).post('/', createUser)

router.put('/:id', updateUser).delete('/:id', deleteUser)


module.exports = router;
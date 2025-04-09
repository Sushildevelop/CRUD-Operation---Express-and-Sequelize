const express=require('express');
const { createUser, getuser, getUserById, updateUser, deleteuser } = require('../controller/userController');

const router=express.Router();

// create a new user
router.post('/add',createUser)

// Get all users
router.get('/getalluser',getuser)

// get a user by Id

router.get('/getuser/:id',getUserById)

// Update a user by ID
router.put('/update/:id',updateUser)

// Delete a user by ID
router.delete('/deleteuser/:id',deleteuser)

module.exports={router}
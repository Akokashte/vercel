const express = require('express')
const userController = require('../controller/user.js')
const {createUser,getAllUsers,getUser,replaceUser,updateUser,deleteUser} = userController;

const router = express.Router();

router
.post('/',createUser)
.get("/",getAllUsers)
.get("/:id",getUser)
.put("/:id",replaceUser)
.patch("/:id", updateUser)
.delete("/:id", deleteUser)

exports.router = router;
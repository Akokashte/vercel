const fs = require("fs");
const path = require("path");

const jsonfile = JSON.parse(fs.readFileSync("Data.json", "utf-8"));
const users = jsonfile.users;
 
 exports.createUser = (req,res)=>{
    console.log(req.body)
    users.push(req.body)
    res.status(201).json(users)
  }
  
   exports.getAllUsers = (req, res) => {
    console.log(req.params.id)
    res.json(users)
  }
  
  exports.getUser = (req, res) => {
    const id = +req.params.id;
    const user = users.find(p=>p.id===id)
    res.json(user)
  }
  
 exports.replaceUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id === id);
    users.splice(userIndex,1,{...req.body,id})
    res.status(204).json()
  }
  
 exports.updateUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id === id)
    const user = users[userIndex]
    users.splice(userIndex,1,{...user,...req.body})
    res.status(204).json({ type: "patch" });
  }
  
 exports.deleteUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id === id)
    const deleted_user = users.splice(userIndex,1)
    res.json(deleted_user);
  }
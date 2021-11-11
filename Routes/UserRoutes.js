const express=require('express')
const router=express.Router()
const User=require('../models/User')
// Add a new User:
router.post('/addnewUser', (req,res)=>{
    let newUser=new User(req.body)
    newUser.save((err,data)=>{
        err? console.log(err): res.send (data)
    })
})
//Create Many Records with model.create()
User.create( {
    name: 'Fatma',
    age: 28,
    email : 'fatma1@gmail.com'
},
{
    name: 'anis',
    age: 26,
    email : 'anis2@gmail.com'
},
{
    name: 'Ali',
    age: 96,
    email : 'ali3@gmail.com'
})
//Get All Users
router.get('/',(req,res)=>{
    User.find({},(err,data)=>{
        err? console.log(err): res.json(data)
    })
})

//Get User By _id
router.get('/:id',(req,res)=>{
    User.findById({_id:req.params.id},{...req.body},(err,data)=>{
        err? console.log(err): res.json(data)
    })
})

//Edit User By _id
router.put('/:id',(req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id},{...req.body},(err,data)=>{
        err? console.log(err): res.json(data)
    })
})

//Delete User by id
router.delete('/:id',(req,res)=>{
User.findByIdAndDelete({_id:req.params.id},(err,data)=>{
    err? console.log(err): res.json('User was deleted')
})
})




module.exports=router
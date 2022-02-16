

const {validationResult} = require('express-validator');

const Users= require('../models/users.model');

// ? pagination
// ? limit, skip

const getUsers = async (req,res)=>{
    try{
        // const per_page = req.query.per_page || 2;
        // const page = req.query.page || 1;
        // const skip = page < 0 ? 0 : (page - 1)*per_page;
        // (page - 1)*per_page
        const users = await Users.find();

        if(!users) return res.status(400).json({msg: "No users found"}) 
        // res.status(200).json(users);
        return res.render("users",{users: users});
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
}

const getTotalUsers= async (req,res)=>{
    try{
        const total = await Users.find({}).count();
        if(!total) return res.status(400).json({msg: "No Users found"})
        res.status(200).json(total);
    }
    catch(err){
       return res.status(400).json({msg: "Something went wrong!"})
    }

}

const getUserById = async (req,res)=>{
    try{
        const user = await Users.findOne({id: req.params.id});
        if(!user) return res.status(400).json({msg: "User not found"})        
        // res.status(200).json(user);
        return res.render("single_user",{user: user});
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
}


const createUser = async (req,res)=>{
    try{
        console.log(req.file);
        // * Validate
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({errors: errors.array()});
        }

        // * Create User
        const doesUserExist= await Users.findOne({email: req.body.email})
        if(doesUserExist) return res.status(400).json({msg: "Duplicate User found"})
        const user = await Users.create({
            username: req.body.username,
            email: req.body.email
            // id: req.body.id
        })

        if(!user) return res.status(400).json({msg: "User not created"})

        //200 ok
        return res.status(200).json(user)
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
}

const deleteUser = async (req,res)=>{
    try{
        const user = await Users.findOneAndDelete({ _id: req.params.id })
        if(!user) return res.status(404).json({msg: "User not found"})
        res.status(200).json(user)
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
}

const patchUser = async (req,res)=>{
    try{
        if(!req.body.username) return res.status(400).json({msg: "Name is required"});
        const user = await Users.findOneAndUpdate({ 
            _id: req.params.id 
        },{
            $set: {
                username: req.body.username,
                email: req.body.email
            }
        },{
            returnOriginal: false
        }
            )
        if(!user) return res.status(404).json({msg: "User not found"})
        res.status(200).json(user)
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
}

module.exports = {
    getUsers,
    getTotalUsers,
    getUserById,
    createUser,
    deleteUser,
    patchUser
};

const express=require('express');
const User=require('../model/User')

const router=express.Router();

//login
router.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    try {
        const user=await User.findOne({username});
        if(user==null){
            return res.status(401).json({message:'Khong tim thay user hoac pass'})
        }
        if(user.password !== password){
        return  res.status(401).json({message:'Invalid usernmae or password'});
        }
        const token=user.username;
        res.json({token:user.username, role:user.role});
    } catch (error) {
        res.status(500).json({message:'Server error'})
    }
});
module.exports=router;
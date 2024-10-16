const express=require('express');
const Appoinment=require('../model/Appoinment');
const router=express.Router();

//lay tat ca appoinment
router.get('/',async (req,res)=>{
    const appoinment=await Appoinment.find().populate('customerId');
    res.json(appoinment);
});

//dat lich hen
router.post('/',async (req,res)=>{
    const {customerId,dressId,date,time,status}=req.body;
    try {
        const newAppoinment=new Appoinment({
            customerId,
            dressId,
            date,
            time,
            status,
        });
        await newAppoinment.save();
        res.json({success:true,message:'Appoinment scheduled successfully',status:newAppoinment.status});
    } catch (error) {
        console.log('Error saving appoiment: ',error);
        res.status(500).json({message:'Failed to scheduled appoinment',error:error.message});
        
    }
});
module.exports=router;
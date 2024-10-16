const express=require('express');
const WeddingDress=require('../model/WeddingDress')

const router=express.Router();




//Create a new weddingdress
router.post('/',async(req,res)=>{
    const newDress=new WeddingDress(req.body);
    await newDress.save();
    res.status(201).json(newDress);
});

//Lay danh sach ao cuoi
router.get('/',async (req,res)=>{
    try {
        const dresses=await WeddingDress.find();
        res.json(dresses);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});
module.exports=router;
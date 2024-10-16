const mongoose=require('mongoose');


const appoinmentSchema=new mongoose.Schema({
    customerId:{type:String, required:true},
    dressId:{type:String, required:true},
    date:{type:Date, required:true},
    time:{type:String, required:true},
    status:{type:String, required:true,default:'Pending'},
});

const Appoinment=mongoose.model('Appoinment',appoinmentSchema);
module.exports=Appoinment;
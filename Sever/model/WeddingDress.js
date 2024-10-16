const mongoose=require('mongoose');

const weddingDressSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    size:{type:String,required:true},
    color:{type:String,required:true},
    status:{type:String,required:true,enum:['available','unavailable']},
    imageUrl:{type:String,required:true},
});
module.exports=mongoose.model('WeddingDress',weddingDressSchema);
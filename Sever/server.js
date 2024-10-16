const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');
const appoimentRoutes=require('./routes/appoinment')
const userRoutes=require('./routes/user')
const dressRoutes=require('./routes/weddingDress')
//gọi các route khác
const app=express();
const PORT=process.env.PORT||5001;
// ket noi den mongodb
mongoose.connect('mongodb+srv://thanh2:169@cluster0.lvh3arx.mongodb.net/aocuoi',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('Da ket noi'))
.catch(err=> console.log(err));
app.use(cors());
app.use(bodyParser.json());
//route
app.use('/api/weddingDresses',dressRoutes);
app.use('/api/users',userRoutes);
app.use('/api/appoinment',appoimentRoutes);
app.use('/api/users/login',(req,res)=>{
    const {username,password}=req.body;
    
})
//them cac route khac

//khoi dong sever
app.listen(PORT,()=>{
    console.log('server dang chay o cong 5001');
    
});



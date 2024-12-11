const express =require('express')
const bodyParser=require("body-parser")
const app =express()
const mongoose=require('mongoose')
const morgan=require('morgan')
require('dotenv/config')

app.use(express.json());
app.use(morgan('tiny'))

const productSchema= mongoose.Schema({
    name:String,
    image: String,
    countInStock: Number
})



const api=process.env.API_URL


mongoose.connect('mongodb+srv://eldho:eldhogeorge123@cluster0.y2qlowl.mongodb.net/ecommerceapi').then(()=>{
    console.log("connected to mongo")
}).catch((err)=>{
    console.log(err)
})


app.listen(3000, ()=>{
    console.log(`server started on port 3000`)
})

app.post(`${api}/products`, (req, res)=>{
    const products=req.body;

    res.send(products)
})
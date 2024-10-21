import express from 'express'
// import axios from 'axios'
import mongoose from 'mongoose'
import cors from 'cors'
import NimsModel from './Nims.js'

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.01:27017/Nims")


// app.post("login",(req,res)=>{
//     const
// })

app.post('/signup',(req,res)=>{
    NimsModel.create(req.body)
    .then(Nims => res.json(Nims))
    .catch(err=> res.json(err))
})

app.listen(3001,()=>{
    console.log("Server is running")
})
import express from 'express'
import 'dotenv/config'
import { dbconnect } from './config.js'
const app=express()
dbconnect()
app.listen(4000,()=>{
console.log("server is running in http://localhost:4000");
})  
import express from 'express'
import 'dotenv/config'
import { dbconnect } from './config.js'
import path from 'path';
import morgan from 'morgan';
import cookieparser from 'cookie-parser';

const app=express()
dbconnect()
import userRoute from './Routes/userRouter.js'
app.use('/',userRoute)
app.use(express.static(path.resolve() + "/public"));
app.use(express.json());
app.use(morgan('dev'))
app.use(cookieparser());
app.listen(4000,()=>{
console.log("server is running in http://localhost:4000");
})  
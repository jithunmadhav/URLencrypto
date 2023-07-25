import mongoose from "mongoose";

export const dbconnect=()=>{
    mongoose.connect(`mongodb://localhost:27017/urlencrypto`).then(()=>{
        console.log("DBconnected");
    }).catch((err)=>{
        console.log(err);
    })
}
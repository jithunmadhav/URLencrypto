import mongoose from "mongoose";

export const dbconnect=()=>{
    mongoose.connect(`${process.env.MONGOOSE_CONNECT}/urlencrypto`).then(()=>{
        console.log("DBconnected");
    }).catch((err)=>{
        console.log(err);
    })
}
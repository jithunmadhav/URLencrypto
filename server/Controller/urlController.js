import urlModel from "../Model/urlModel.js";
import { nanoid } from "nanoid";

export const urlshorten=async(req,res)=>{
    try {
        const {title,longurl,userId}=req.body;
        const shorturl=`https://urlencrypto.netlify.app/${nanoid(5)}`
        // const shorturl=`http://localhost:3000/${nanoid(5)}`
        await urlModel.create({title,longurl,userId,shorturl})
        res.status(200).json({err:false})
    } catch (error) {
        res.status(500).json({err:true,error})
    }

}

export const getUrl=async(req,res)=>{
    try {
        const id=req.query.id;
        const result=  await urlModel.find({userId:id}).sort({ createdDate: -1 }).lean()
        if(result){
            res.status(200).json({err:false,result})
        }else{
            res.status(404).json({err:true})
        }
    } catch (error) {
        res.status(500).json({err:true})
    }
}

export const deleteUrl=async(req,res)=>{
  try {
    const id=req.params.id;
     urlModel.deleteOne({_id:id}).then((response)=>{
        console.log(response);
     })
    res.json({err:false})
  } catch (error) {
    console.log(error);
  }
}

export const viewUrl=async(req,res)=>{
    try {
        const id=req.params.id;
        const shorturl=`https://urlencrypto.netlify.app/${id}`
        // const shorturl=`http://localhost:3000/${id}`
        const result=await urlModel.findOne({shorturl:shorturl})
        const longurl=result.longurl;
        res.json({err:false,longurl})
    } catch (error) {
        console.log(error);
    }
}
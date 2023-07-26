import urlModel from "../Model/urlModel.js";
import { nanoid } from "nanoid";

export const urlshorten=async(req,res)=>{
    try {
        const {title,longurl,userId}=req.body;
        const shorturl=`https://url-9uyl.onrender.com/url/${nanoid(5)}`
        await urlModel.create({title,longurl,userId,shorturl})
        res.status(200).json({err:false})
    } catch (error) {
        res.status(500).json({err:true,error})
    }

}

export const getUrl=async(req,res)=>{
    try {
        const id=req.query.id;
        const result=  await urlModel.find({userId:id}).lean()
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
    console.log(id);
     urlModel.deleteOne({_id:id}).then((response)=>{
        console.log(response);
     })
    res.json({err:false})
  } catch (error) {
    console.log(error);
  }
}

export const viewUrl=async(req,res)=>{
    console.log(req.params.id);
    try {
        const id=req.params.id;
        const shorturl=`https://url-9uyl.onrender.com/url/${id}`
        const result=await urlModel.findOne({shorturl:shorturl})
        res.redirect(result.longurl)
    } catch (error) {
        console.log(error);
    }
}
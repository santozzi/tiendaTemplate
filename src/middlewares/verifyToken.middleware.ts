import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';
interface IPayload{
    _id:number;
    iat:number;
    exp:number;
}
export const TokenValidation = (req:Request,res:Response,next:NextFunction)=>{
    const token = req.header('auth-token');
    console.log("estoy en middleware");
    if(!token)
      return res.status(401).json('Access denided');
  
    const payload:IPayload =  jwt.verify(token, process.env.SECRET_KEY || "sergio") as IPayload;
    if(payload._id)
        req.userId = payload._id;
    res.status(200);

    next();

    
}
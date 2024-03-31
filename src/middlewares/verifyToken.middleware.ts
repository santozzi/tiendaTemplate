import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { TokenSecurity, confgToken } from "../config/token.config";
interface IPayload{
    _id:number;
    iat:number;
    exp:number;
}
const config:TokenSecurity =  confgToken();
export const TokenValidation = (req:Request,res:Response,next:NextFunction)=>{
    const token = req.header('auth-token');
    
    if(!token)
      return res.status(401).json('Access denided');
  
    const payload:IPayload =  jwt.verify(token, config.secretKey) as IPayload;
    if(payload._id)
        req.userId = payload._id;
    res.status(200);

    next();

    
}
//TODO: agregar validacion del password y sacarlo de auth
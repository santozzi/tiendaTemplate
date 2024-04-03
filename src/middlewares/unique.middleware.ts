import { Request,Response,NextFunction } from "express";
import { Persona } from "../models/entities/persona";

import { Auth } from "../models/entities/auth";

export const uniqueValidation =  async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const resultadoEmail = await Persona.findOneBy({email:req.body.email})
        const resultadoUsername = await Auth.findOneBy({userName:req.body.userName}) 
        
        if(resultadoEmail && resultadoUsername){
            throw new Error(`el email ${req.body.email} y el usuario ${req.body.userName} ya existen`);
        }else if(resultadoUsername){
            throw new Error(`el usuario ${req.body.userName} ya existe`)
        }else if(resultadoEmail){
            throw new Error(`el email ${req.body.email} ya existe`)
        }
        
        next();
    }catch(error){
      
       if(error instanceof Error){
        res.status(500).json({message: error.message});
    }
    }
    
    
   

    
}
import { Request,Response,NextFunction } from "express";

import { AnyZodObject, ZodError } from "zod";

export const loginValidation = (schema: AnyZodObject)=> (req:Request,res:Response,next:NextFunction)=>{
    try{
        schema.parse({
            body:req.body,
            params:req.params,
            query:req.query
        });
        next();
    }catch(error){
       if(error instanceof ZodError)
         res.status(400).json(error.issues.map((issues)=>({path:issues.path,message:issues.message})));
    }
    
    
   

    
}
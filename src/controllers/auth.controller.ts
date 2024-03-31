import { Response,Request } from "express";
import { Usuario } from "../models/entities/usuario";
import jwt from 'jsonwebtoken';
import { TokenSecurity, confgToken } from "../config/token.config";


const config:TokenSecurity =  confgToken();

export async function signUp(req:Request ,res:Response){
  
    try {
           
        const {nombre,userName,apellido,email,password} = req.body;
        const usuario:Usuario = new Usuario();
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.userName = userName;
        usuario.email= email;
        await usuario.setPassword(password);
        const savedUser = await usuario.save(); 
        //token
        const clave:string = config.secretKey;
        
        const token: string = jwt.sign({_id:savedUser.id},clave);




        res.status(200).header('auth-token',token).json(savedUser.showUser());

    } catch (error) {
        if(error instanceof Error){
          res.status(500).json({message: error.message});
        }
    }

}
export async function signIn(req:Request ,res:Response){
  
  try {
    

    const {userName, password} = req.body;
    const usuario = await Usuario.findOneBy({userName});
    if(usuario){
      const validate:boolean = await usuario.validatePassword(password);
      
      if(validate){
        const token = jwt.sign({_id:usuario.id}, config.secretKey,{
            expiresIn: 60 * 60 * 24
            
        }) 
        res.status(200).header('auth-token',token).json(usuario.showUser());
         
      }else{
        res.status(403).json({message: "usuario o clave incorrectos"});
      }
    }else{
        res.status(403).json({message: "usuario o clave incorrectos"})
    }
    
  } catch (error) {
    if(error instanceof Error){
      res.status(500).json({message: error.message});
          
    }
}
}
export async function profile(req:Request ,res:Response){
  
    
    const usuario = await Usuario.findOneBy({id:req.userId})
    if(usuario)
       res.status(200).json(usuario);

}
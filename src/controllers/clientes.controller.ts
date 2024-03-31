import {Request,Response} from 'express';
import { Cliente } from '../models/entities/cliente';
import { ClienteDto } from '../models/dtos/cliente.dto';
import { clienteSchemaType } from '../schemas/cliente.schema';
import { Persona } from '../models/entities/persona';
import { Auth } from '../models/entities/auth';

export async function createCliente(req:Request, res:Response) {
    try {
     
        const {nombre, apellido, direccion, email,userName,password} = req.body;
        const cliente = new Cliente();
        const persona = new Persona();
        const auth = new Auth();
        auth.userName = userName;
        auth.setPassword(password);

        persona.nombre = nombre;
        persona.apellido= apellido;
        persona.direccion = direccion;
        persona.email= email;
        const personaSaved = await persona.save();
        cliente.persona = personaSaved;
        
        const authSaved = await auth.save();
        cliente.auth= authSaved;
        const clienteSaved = await cliente.save();
   


        res.status(200).json(clienteSaved);
    } catch (error ) {
        if(error instanceof Error){
            res.status(500).json({message: error.message});
        }
    }
    
}

/* export async function getClientes(req:Request, res:Response){
    try {
        const clientes: Cliente[] = await Cliente.findBy({activo:true});
         res.status(200).send(clientes);
    } catch (error) {
        if(error instanceof Error)
          res.status(500).json({message: error.message});
    }
}
export async function updateCliente(req:Request, res:Response){

    try {
        
        const reqCliente:ClienteDto = req.body
        
        const {id} = req.params;
        const cliente = await Cliente.findOneBy({id:parseInt(id),activo:true});
       
        
        
        if(cliente){
            //TODO: hacer el dto de cliente para que no mande cualquier cosa
          const  nuevoCliente =  await Cliente.update(parseInt(id), reqCliente)
          console.log(nuevoCliente);
          
            res.status(200).json({message: "actualizado con exito!!"});
        }else{
            res.status(404).json({message: "Cliente no encontrado"});
        }
        
    } catch (error) {
        if(error instanceof Error)
           res.status(500).json({message: error.message});
    }
}export async function deleteCliente(req:Request, res:Response){

    try {
        const {id} = req.params;
        const cliente = await Cliente.findOneBy({id:parseInt(id)});
       
        
        
        if(cliente){
            //TODO: hacer el dto de cliente para que no mande cualquier cosa
          cliente.activo = false
          await cliente.save();
                 
            res.status(204).json({message: "borrado con exito!!"});
        }else{
            res.status(404).json({message: "Cliente no encontrado"});
        }
        
    } catch (error) {
        if(error instanceof Error)
           res.status(500).json({message: error.message});
    }
}
export async function clienteFindOneById(req:Request, res:Response) {
     try {
        const {id} = req.params;
        const cliente = await Cliente.findOneBy({id:parseInt(id),activo:true})
        if(cliente){
            res.status(200).json(cliente);

        }else{
            res.status(404).json({message:"El cliente no se encuentra"})
        }
     } catch (error) {
        if(error instanceof Error){
            res.status(500).json({message:error.message})
        }
     }
} */




/* export async function destroyCliente(req:Request,res:Response){
    try {
        const {id} = req.params;
        const cliente = await Cliente.findOneBy({id:parseInt(id)});
        if(cliente){
            await Cliente.delete({id:parseInt(id)})
            res.status(200).json({message:"Fué eliminado con exito"})
        }else{
            res.status(404).json({message:"El cliente no se encuentra"})
        }

    } catch (error) {
        if(error instanceof Error)
          res.status(500).json({message: error.message})
    }
} */
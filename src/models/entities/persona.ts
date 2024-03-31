import { DB } from './db';
export class Persona extends DB{

    protected nombre: string;
    protected apellido: string;
    
    constructor(nombre: string, apellido: string,id:number=0,created_at:Date=new Date(0,0,0)){
        super(id,created_at);
        
        this.nombre = nombre;
        this.apellido = apellido;
     
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
  
    setNombre(nombre: string){
        this.nombre = nombre;
    }
    setApellido(apellido: string){
        this.apellido = apellido;
    }
  
}
import { DB } from "./db";

export class CategoriaProducto extends DB{
    protected nombre:string;
    protected descripcion:string;
    constructor(nombre:string, descripcion:string,id:number=0,created_at:Date=new Date(0,0,0)){
        super(id,created_at);
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    getNombre(){
        return this.nombre;
    }
    getDescripcion(){
        return this.descripcion;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }
    setDescripcion(descripcion:string){
        this.descripcion = descripcion;
    }
}
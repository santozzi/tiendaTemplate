import { CategoriaProducto } from "./categoriaProducto";
import { DB } from "./db";

export class Producto extends DB{
    protected cantidadStock:number;
    protected nombre:string;
    protected precio:number;
    protected descripcion:string;
    protected categoriaProducto:CategoriaProducto;
    constructor(cantidadStock:number, nombre:string, precio:number, descripcion:string, categoriaProducto:CategoriaProducto,id:number=0,created_at:Date=new Date(0,0,0)){
        super(id,created_at);
        this.cantidadStock = cantidadStock;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoriaProducto = categoriaProducto;
    }
    getCantidadStock(){
        return this.cantidadStock;
    }
    getNombre(){
        return this.nombre;
    }
    getPrecio(){
        return this.precio;
    }
    getDescripcion(){
        return this.descripcion;
    }
    getCategoriaProducto(){
        return this.categoriaProducto;
    }
    setCantidadStock(cantidadStock:number){
        this.cantidadStock = cantidadStock;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }
    setPrecio(precio:number){
        this.precio = precio;
    }
    setDescripcion(descripcion:string){
        this.descripcion = descripcion;
    }
    setCategoriaProducto(categoriaProducto:CategoriaProducto){
        this.categoriaProducto = categoriaProducto;
    }
    
}
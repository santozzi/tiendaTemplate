import { DB } from "./db";
import { Orden } from "./orden";
import { Producto } from "./producto";

export class DetalleDeOrden extends DB{
    protected productos:Producto[];
    protected orden:Orden;
    protected cantidad:number;
    protected precioUnitario:number;
    protected total:number;
    constructor(productos:Producto[], orden:Orden, cantidad:number, precioUnitario:number, total:number,id:number=0,created_at:Date=new Date(0,0,0)){
        super(id,created_at);
        this.productos = productos;
        this.orden = orden;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
        this.total = total;
    }
    getProductos(){
        return this.productos;
    }
    getOrden(){
        return this.orden;
    }
    getCantidad(){
        return this.cantidad;
    }
    getPrecioUnitario(){
        return this.precioUnitario;
    }
    getTotal(){
        return this.total;
    }
    setProductos(productos:Producto[]){
        this.productos = productos;
    }
    setOrden(orden:Orden){
        this.orden = orden;
    }
    setCantidad(cantidad:number){
        this.cantidad = cantidad;
    }
    setPrecioUnitario(precioUnitario:number){
        this.precioUnitario = precioUnitario;
    }
    setTotal(total:number){
        this.total = total;
    }

}
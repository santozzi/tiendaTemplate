
import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Orden } from "./orden";
import { Producto } from "./producto";
//TODO: hacer las relaciones entre entidades
export class DetalleDeOrden extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number; 
    @Column()
    productos:Producto[];
    @Column()
    orden:Orden;
    @Column()
    cantidad:number;
    @Column()
    precioUnitario:number;
    @Column()
    total:number;

    

}
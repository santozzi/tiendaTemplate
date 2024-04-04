
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Orden } from "./orden";
import { Producto } from "./producto";
//TODO: hacer las relaciones entre entidades
@Entity()
export class DetalleDeOrden extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number; 
    @ManyToOne(()=>Producto)
    @JoinColumn({name:"id_producto"})
    productos:Producto[];
    @ManyToOne(()=>Orden)
    @JoinColumn({name:"id_orden"})
    orden:Orden;
    @Column()
    cantidad:number;
    @Column()
    precioUnitario:number;
    @Column()
    total:number;

    

}
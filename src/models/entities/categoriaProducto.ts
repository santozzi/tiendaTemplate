import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";


export class CategoriaProducto extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre:string;
    @Column()
    descripcion:string;

   
}
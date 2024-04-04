import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CategoriaProducto extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre:string;
    @Column()
    descripcion:string;

   
}
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Empleado } from "./empleado";
@Entity()
export class Persona extends BaseEntity{
     @PrimaryGeneratedColumn({name:"id_persona"})
     idPersona:number;
     @Column() 
     nombre: string;
     @Column()
     apellido: string;
     @Column({unique:true})
     email: string;
     @Column()
     direccion: string;
     //bidireccional
     @OneToOne(()=>Empleado,(empleado)=>empleado.persona)
     empleado:Empleado;
    
}
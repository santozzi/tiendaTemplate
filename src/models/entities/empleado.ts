import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Persona } from './persona';
@Entity()
export class Empleado extends BaseEntity{
    @PrimaryGeneratedColumn({name:"id_empleado"})
    idEmpleado:number;
    @Column()
    puesto:string;
    @Column()
    fechaDeContratacion:Date;
    @Column({name:"id_auth"})
    idAuth:number;
    //relaciones
    @OneToOne(()=>Persona)
    @JoinColumn({name:"id_persona"})
    persona:Persona;


}
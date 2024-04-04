import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, BaseEntity, OneToOne, JoinColumn } from 'typeorm';
import { Persona } from './persona';
import { Auth } from './auth';
@Entity()
export class Cliente extends BaseEntity{
    @PrimaryGeneratedColumn({name:"id_cliente"})
    idCliente: number;

    @CreateDateColumn()
    create_at: Date;
    @Column({default:true})
    activo:boolean;
    @Column({name:"id_auth",default:0})
    idAuth:number;
    @Column({name:"id_persona"})
    idPersona:number;
    @OneToOne(()=>Persona,{onDelete: 'CASCADE'})
    @JoinColumn({name:"id_persona"})
    persona:Persona;
    @OneToOne(()=>Auth,{onDelete: 'CASCADE'})
    @JoinColumn({name:"id_auth"})
    auth:Auth;
    
}
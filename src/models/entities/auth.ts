import { BaseEntity, Column, Entity,   OneToOne,   PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcryptjs'
import { Cliente } from "./cliente";


@Entity()
export class Auth extends BaseEntity{
 
   @PrimaryGeneratedColumn()
   idAuth:number;
   @Column({unique:true})
   userName:string;
   @Column()
   protected password:string;
   @OneToOne(()=>Cliente,{onDelete:"CASCADE"})
   cliente:Cliente;
   @Column({default:true})
   activo:boolean;


   public async setPassword(pass: string){
     const salt =  await bcrypt.genSalt(10); 
     this.password = await bcrypt.hash(pass,salt);
   }
   public showAuth(){
      return {
         idPersona:this.idAuth,

         userName:this.userName,
        
      }
   }
   public async validatePassword(password:string){
      return await bcrypt.compare(password,this.password);
   }

}
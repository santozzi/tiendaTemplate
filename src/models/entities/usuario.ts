import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, } from "typeorm";
import bcrypt from 'bcryptjs'

@Entity()
export class Usuario extends BaseEntity{
   @PrimaryGeneratedColumn()
   id:number;
   @Column()
   nombre:string;
   @Column({unique:true})
   userName:string;
   @Column()
   apellido:string;
   @Column({unique:true})
   email:string;
   @Column()
   protected password:string;
   @CreateDateColumn()
   created_at:Date  
   @Column({default:true})
   activo:boolean;

   public async setPassword(pass: string){
     const salt =  await bcrypt.genSalt(10); 
     this.password = await bcrypt.hash(pass,salt);
   }
   public showUser(){
      return {
         id:this.id,
         nombre:this.nombre,
         apellido:this.apellido,
         userName:this.userName,
         email:this.email,
         created_at:this.created_at
      }
   }
   public async validatePassword(password:string){
      return await bcrypt.compare(password,this.password);
   }

}
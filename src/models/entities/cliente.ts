import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, BaseEntity } from 'typeorm';
@Entity()
export class Cliente extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    direccion: string;
    @CreateDateColumn()
    create_at: Date;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column({default:true})
    activo:boolean;
   
    
}
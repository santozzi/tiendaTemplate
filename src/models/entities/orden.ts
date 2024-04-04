import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./cliente";
@Entity()
export class Orden extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(()=>Cliente)
  @JoinColumn({name:"id_cliente"})
  cliente: Cliente;
  @Column()
  fechaDeOrden: Date;
  @Column()
  total: number;
  @Column()
  estado: boolean;
}
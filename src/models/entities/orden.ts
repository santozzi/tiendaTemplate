import {
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./cliente";

export class Orden extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  cliente: Cliente;
  @Column()
  fechaDeOrden: Date;
  @Column()
  total: number;
  @Column()
  estado: boolean;
}
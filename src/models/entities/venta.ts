import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./cliente";
import { Empleado } from "./empleado";
export class Venta extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  cliente: Cliente;

  @Column()
  empleado: Empleado;

  @Column()
  fechaDeVenta: Date;

  @Column()
  total: number;
}
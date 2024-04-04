import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./cliente";
import { Empleado } from "./empleado";
@Entity()
export class Venta extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(()=>Cliente)
  @JoinColumn({name:"id_cliente"})
  cliente: Cliente;

  @OneToOne(()=>Empleado)
  @JoinColumn({name:"id_empleado"})
  empleado: Empleado;

  @Column()
  fechaDeVenta: Date;

  @Column()
  total: number;
}
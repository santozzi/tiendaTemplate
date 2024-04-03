import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { CategoriaProducto } from "./categoriaProducto";
//TODO: hacer las relaciones entre entidades
export class Producto extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  cantidadStock: number;
  @Column()
  nombre: string;
  @Column()
  precio: number;
  @Column()
  descripcion: string;
  @Column()
  categoriaProducto: CategoriaProducto;
}

import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CategoriaProducto } from "./categoriaProducto";
//TODO: hacer las relaciones entre entidades
@Entity()
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
  @OneToOne(()=>CategoriaProducto)
  @JoinColumn({name:"id_categoria_producto"})
  categoriaProducto: CategoriaProducto;
}

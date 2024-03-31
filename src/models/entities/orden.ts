import { Cliente } from "./cliente";
import { DB } from "./db";

export class Orden extends DB{
  protected cliente:Cliente;
  protected fechaDeOrden:Date;
  protected total:number;
  protected estado:boolean;
  constructor(cliente:Cliente, fechaDeOrden:Date, total:number, estado:boolean,id:number=0,created_at:Date=new Date(0,0,0)){
    super(id,created_at);
      this.cliente = cliente;
      this.fechaDeOrden = fechaDeOrden;
      this.total = total;
      this.estado = estado;
  }
    getCliente(){
        return this.cliente;
    }
    getFechaDeOrden(){
        return this.fechaDeOrden;
    }
    getTotal(){
        return this.total;
    }
    getEstado(){
        return this.estado;
    }
    setCliente(cliente:Cliente){
        this.cliente = cliente;
    }
    setFechaDeOrden(fechaDeOrden:Date){
        this.fechaDeOrden = fechaDeOrden;
    }
    setTotal(total:number){
        this.total = total;
    }
    setEstado(estado:boolean){
        this.estado = estado;
    }

}
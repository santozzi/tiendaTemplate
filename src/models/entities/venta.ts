import { Cliente } from "./cliente";
import { Empleado } from "./empleado";
export class Venta{
   protected cliente:Cliente;
   protected empleado:Empleado;
   protected fechaDeVenta:Date;
   protected total:number;
   constructor(cliente:Cliente, empleado:Empleado, fechaDeVenta:Date, total:number){

       this.cliente = cliente;
       this.empleado = empleado;
       this.fechaDeVenta = fechaDeVenta;
       this.total = total;
   }
    getCliente(){
         return this.cliente;
    }
    getEmpleado(){
         return this.empleado;
    }
    getFechaDeVenta(){
         return this.fechaDeVenta;
    }
    getTotal(){
         return this.total;
    }
    setCliente(cliente:Cliente){
         this.cliente = cliente;
    }
    setEmpleado(empleado:Empleado){
         this.empleado = empleado;
    }
    setFechaDeVenta(fechaDeVenta:Date){
         this.fechaDeVenta = fechaDeVenta;
    }
    setTotal(total:number){
         this.total = total;
    }

}
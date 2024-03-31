import { Persona } from './persona';
export class Empleado extends Persona{
    protected puesto:string;
    protected fechaDeContratacion:Date;
    constructor(nombre: string, apellido: string, puesto:string, fechaDeContratacion:Date){
        super(nombre, apellido);
        this.puesto = puesto;
        this.fechaDeContratacion = fechaDeContratacion;
    }
    getPuesto(){
        return this.puesto;
    }
    getFechaDeContratacion(){
        return this.fechaDeContratacion;
    }
    setPuesto(puesto:string){
        this.puesto = puesto;
    }

}
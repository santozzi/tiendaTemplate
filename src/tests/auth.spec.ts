
import app from '../app';
import request from 'supertest';
import { AppDataSource } from '../models/db';

AppDataSource
type Customer = {
    nombre:string;
    apellido:string;
    userName:string;
    password:string;
    email:string;
    direccion:string;
}
const newCustomer:Customer =     {
    nombre:"Sergio",
    apellido:"Antozzi",
    userName:"laparka",
    password:"123456",
    email:"santozzi@gmail.com",
    direccion:"av siempre viva 1234"
}
const userAuth =     {
  
    userName:"laparka",
    password:"123456"
  

}

beforeAll(async ()=>{
    await AppDataSource.initialize();
  });




async function responseSignin(){
    const res = await request(app).post('/api/auth/signin').send(userAuth)
    return res;
} 

async function responseSignUp(customer:Customer) {
     const res = await request(app).post('/clientes').send(customer)
    return res;
}
async function token() {
   return (await responseSignin()).header['auth-token']; 
} 
let idCreated = 5;
// describe('Customer signup',()=>{
    
//     test('should respond with a 201 status code',async ()=>{
//         const res = await responseSignUp(newCustomer);
         //idCreated= res.body.id_cliente;
//         console.log(res.body);
        
//        expect(res.statusCode).toBe(201)
//     })
    
// })
describe('Customer delete',()=>{
    
    test('should respond with a 201 status code',async ()=>{
        //const res = await responseSignUp(newCustomer);
      //  console.log(res.body);
      if(idCreated>0){
         const res = await request(app).delete(`/clientes/${idCreated}`)
         expect(res.statusCode).toBe(200)
      }else{
        const res = await request(app).delete(`/clientes/${idCreated}`)
        expect(res.statusCode).toBe(404)
      }
      
    })
    
})
describe('Customer signin',()=>{
    
    test('should respond with a 202 status code',async ()=>{
        const res = await responseSignin();
        expect(res.statusCode).toBe(202)
    })
    
})

afterAll(async ()=>{
    await AppDataSource.close();
  });
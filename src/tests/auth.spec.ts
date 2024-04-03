
import app from '../app';
import request from 'supertest';
import { AppDataSource } from '../models/db';

AppDataSource
const userAuth =     {
  
    userName:"laparka",
    password:"123456"
  

}
beforeAll(async ()=>{
    await AppDataSource.initialize();
  });

async function response(){
    const res = await request(app).post('/api/auth/signin').send(userAuth)
    return res;
} 
async function token() {
   return (await response()).header['auth-token']; 
} 

describe('login',()=>{
    test('should respond with a 200 status code',async ()=>{
        const res = await response();
        expect(res.statusCode).toBe(202)
    })
    
})

afterAll(async ()=>{
    await AppDataSource.close();
  });
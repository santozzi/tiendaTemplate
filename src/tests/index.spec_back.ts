import app from '../app';
import request from 'supertest';
describe('GET /tasks',()=>{
    test('should respond with a 200 status code',async ()=>{
        const response = await request(app).get('/hola').send()
        console.log(response.body.message);
        expect(response.body.message).toBe("hola mundo")
        expect(response.statusCode).toBe(200)
           
  
    })
})
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import clienteRouter from './routes/cliente.routes';
import authRouter from './routes/auth.routes';
const app = express();
//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routes
app.use('/clientes',clienteRouter);
app.use('/api/auth/',authRouter);
export default app;
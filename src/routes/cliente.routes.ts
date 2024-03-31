
import { Router } from "express";
import {createCliente } from "../controllers/clientes.controller";
import { loginValidation } from "../middlewares/schemas.middleware";
import { clienteCreateSchema, clienteSchema, clienteUpdateSchema } from "../schemas/cliente.schema";
import { uniqueValidation } from "../middlewares/unique.middleware";
const router = Router();


router.post("/clientes",loginValidation(clienteCreateSchema),uniqueValidation, createCliente);
/* router.get("/clientes", getClientes);
router.put("/clientes/:id",loginValidation(clienteUpdateSchema),updateCliente);
router.delete("/clientes/:id",loginValidation(clienteSchema),deleteCliente);
router.get("/clientes/:id",loginValidation(clienteSchema), clienteFindOneById); */
export default router;

import { Router } from "express";
import {createCliente } from "../controllers/clientes.controller";
import { loginValidation } from "../middlewares/schemas.middleware";
import { clienteCreateSchema, clienteSchema, clienteUpdateSchema } from "../schemas/cliente.schema";
import { uniqueValidation } from "../middlewares/unique.middleware";
const router = Router();



router.post("/",loginValidation(clienteCreateSchema),uniqueValidation, createCliente);
/* router.get("/, getClientes);
router.put("/:id",loginValidation(clienteUpdateSchema),updateCliente);
router.delete("/:id",loginValidation(clienteSchema),deleteCliente);
router.get("/:id",loginValidation(clienteSchema), clienteFindOneById); */
export default router;
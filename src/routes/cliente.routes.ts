
import { Router } from "express";
import {createCliente, destroyCliente } from "../controllers/clientes.controller";
import { loginValidation } from "../middlewares/schemas.middleware";
import { clienteCreateSchema, clienteSchema, clienteUpdateSchema } from "../schemas/cliente.schema";
import { uniqueValidation } from "../middlewares/unique.middleware";
const router = Router();



router.post("/",loginValidation(clienteCreateSchema),uniqueValidation, createCliente);
router.delete("/:id",loginValidation(clienteSchema),destroyCliente);
/* router.get("/, getClientes);
router.put("/:id",loginValidation(clienteUpdateSchema),updateCliente);

router.get("/:id",loginValidation(clienteSchema), clienteFindOneById); */
export default router;
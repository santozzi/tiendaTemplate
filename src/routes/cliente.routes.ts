
import { Router } from "express";
import { clienteFindOneById, createCliente, deleteCliente, getClientes, updateCliente } from "../controllers/clientes.controller";
const router = Router();


router.post("/clientes", createCliente);
router.get("/clientes", getClientes);



router.get("/hello", (req, res) => {
  res.send("Hello World");
});
router.put("/clientes/:id",updateCliente);
router.delete("/clientes/:id",deleteCliente);
router.get("/clientes/:id", clienteFindOneById);
export default router;
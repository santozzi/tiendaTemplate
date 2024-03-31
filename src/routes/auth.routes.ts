import { signUp,signIn,profile } from "../controllers/auth.controller";
import { Router } from "express";
import { TokenValidation } from "../middlewares/verifyToken.middleware";
const router: Router = Router();

router.post('/signup/',signUp);
router.post('/signIn/',signIn);

router.get('/profile/', TokenValidation ,profile);


export default router;
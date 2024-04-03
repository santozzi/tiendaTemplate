import { signIn,profile } from "../controllers/auth.controller";
import { Router } from "express";
import { TokenValidation } from "../middlewares/verifyToken.middleware";
import { loginValidation } from "../middlewares/schemas.middleware";
import { loginSchema,signUpSchema } from "../schemas/auth.schema";
const router: Router = Router();
//deprecated
//router.post('/signup/',loginValidation(signUpSchema),signUp);
router.post('/signIn/',loginValidation(loginSchema),signIn);

router.get('/profile/', TokenValidation ,profile);


export default router;
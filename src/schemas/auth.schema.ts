import {z} from 'zod'
export const loginSchema = z.object({
    body: z.object({
    userName: z.string().min(1,{message:"no puede estar vacio"}),
    password: z.string().min(6,{message:"debe terner mas de 5 caracteres"})
  })})

  export const signUpSchema = z.object({
    body:z.object(
        {
        nombre:z.string().min(1,{message:"el campo no puede estar vacio"}),
        apellido:z.string().min(1,{message:"el campo no puede estar vacio"}),
        userName:z.string().min(1,{message:"el campo no puede estar vacio"}),
        email:z.string().min(1,{message:"el campo no puede estar vacio"}).email({message:"direccion de email invalida"}),
        password:z.string().min(6,{message:"el campo debe tener mas de 5 caracteres"})
        }
  )})
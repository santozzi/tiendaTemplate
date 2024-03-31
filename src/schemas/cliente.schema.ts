import { z } from "zod";

export const clienteCreateSchema = z.object({
    body: z.object({
        nombre:z.string(), 
        apellido:z.string(), 
        direccion:z.string(),
        email:z.string().email(),
        password:z.string().min(5,{message:"debe ser mayor a 5 caracteres"}),
        userName:z.string().min(5,{message:"el usuario debe ter mas de 5 caracteres"})

    })

})
export const clienteUpdateSchema = z.object({
    body: z.object({
        nombre:z.string(), 
        apellido:z.string(), 
        direccion:z.string()
    }),
    params:z.object({
        id:z.number().nonnegative()
    })
})

export const clienteSchema = z.object({

    params:z.object({
        id:z.string()
    })
})

export type clienteSchemaType = z.infer<typeof clienteSchema>["params"]


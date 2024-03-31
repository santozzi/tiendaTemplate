import { z } from "zod";

export const clienteCreateSchema = z.object({
    body: z.object({
        nombre:z.string(), 
        apellido:z.string(), 
        direccion:z.string()
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


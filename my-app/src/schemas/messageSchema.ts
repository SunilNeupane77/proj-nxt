import { z } from "zod"
export const MessageSchema=z.object({
   content:z
   .string()
   .min(10,{message:"content must be at least of 10 characters"})
   .max(300,"Conteent must be no longer than 300 characters")
})
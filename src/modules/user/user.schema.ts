import {z} from "zod";

export const cadastroSchema = z.object({
  name: z.string().min(4).max(20),
  password: z.string().min(8).max(12),
  email: z.email().min(10).max(30)
})

export const loginSchema = z.object({
  email: z.email().min(10).max(30),
  password: z.string().min(8).max(12)
})
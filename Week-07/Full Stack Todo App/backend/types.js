import * as z from "zod";

export const CreateSchema = z.object({
    text:z.string()
})

export const IdSchema = z.object({
    id:z.string()
})
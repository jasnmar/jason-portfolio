import { defineCollection, z } from "astro:content"
import { file } from "astro/loaders"


const projects = defineCollection({
    loader: file("src/data/projects.json"),
    schema: z.object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        source: z.string().optional(),
        image: z.string().optional(),
        deploy: z.string().optional(),
        goals: z.array(z.string()).optional(),
        images: z.array(z.object({image: z.string(), link: z.string().optional()})),
    })
})

export const collections = { projects }
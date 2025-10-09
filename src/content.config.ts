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
    images: z.array(
      z.object({ image: z.string(), link: z.string().optional() })
    ),
  }),
})

const certificates = defineCollection({
  loader: file("src/data/certificates.json"),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    source: z.string(),
    description: z.string(),
    duration: z.string().optional(),
    level: z.string().optional(),
    certificateLink: z.string().optional(),
  }),
})

const jobs = defineCollection({
  loader: file("src/data/jobinfo.json"),
  schema: z.object({
    id: z.number(),
    employer: z.string(),
    employerLink: z.string().optional(),
    position: z.string(),
    location: z.string(),
    description: z.array(z.string()),
    bullets: z.array(z.string()).optional(),
    startDate: z.string(),
    endDate: z.string(),
  }),
})

export const collections = { projects, certificates, jobs }

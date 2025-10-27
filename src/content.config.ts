import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blogPosts = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/data/blog-posts'
  }),

  schema: z.object({
    title: z.string().min(5),
    description: z.string().min(10),
    date: z.date()
  })
})

export const collections = {
  blogPosts
}
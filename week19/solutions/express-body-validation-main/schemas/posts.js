import { z } from 'zod/v4';

export const postSchema = {
  POST: z.object({
    title: z.string().min(3).max(255),
    content: z.string().max(5000),
    userId: z.number(),
  }),
  PUT: z.object({
    title: z.string().min(3).max(255).optional(),
    content: z.string().max(5000).optional(),
    userId: z.number(),
  }),
};

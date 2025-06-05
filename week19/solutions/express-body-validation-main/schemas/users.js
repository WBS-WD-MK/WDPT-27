import { z } from 'zod/v4';

export const userSchema = {
  POST: z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.email(),
  }),
  PUT: z.object({
    firstName: z.string().min(2).max(30).optional(),
    lastName: z.string().min(2).max(30).optional(),
    email: z.email(),
  }),
};

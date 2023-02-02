import z from 'zod';

const obj = z.object({
  id: z.number(),
  name: z.string(),
})

export type HoverMe = z.infer<typeof obj>;

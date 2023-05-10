import * as z from 'zod';

export const Schema = z.object({
  password: z.string().min(1, 'Campo obrigatório'),
});

export type LoginType = z.infer<typeof Schema>;
export type PlatformType = 'height' | 'position' | 'padding' | undefined;

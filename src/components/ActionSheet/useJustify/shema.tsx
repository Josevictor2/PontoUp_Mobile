import * as z from 'zod';

export const Schema = z.object({
  select: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(1, 'Campo obrigatório'),
  startDate: z.date({
    required_error: 'Campo obrigatório',
  }),
  endDate: z
    .date({
      required_error: 'Campo obrigatório',
    })
    .min(new Date('2023-01-01'), { message: 'Campo obrigatório' }),
  description: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(1, 'Campo obrigatório'),
  file: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .url()
    .optional(),
});

export type CreatePost = z.infer<typeof Schema>;

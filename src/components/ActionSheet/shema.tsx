import * as z from 'zod';

// const MAX_5MB = 5 * 1024 * 1024;

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
  // file: z
  //   .instanceof(FileList)
  //   .transform((list) => list.item(0))
  //   .optional()
  //   .refine((file) => !file || (file.size > 0 && file.size <= MAX_5MB), {
  //     message: 'Arquivo deve ter no máximo 5MB',
  //   }),
});

export type CreatePost = z.infer<typeof Schema>;

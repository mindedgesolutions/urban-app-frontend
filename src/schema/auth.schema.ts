import zod from 'zod';
import { validEmail } from './common.schema';

export const signinSchema = zod
  .object({
    username: zod.string().min(1, 'Username is required'),
    password: zod.string().min(1, 'Password is required'),
  })
  .superRefine((data, ctx) => {
    const { username } = data;
    if (!validEmail(username)) {
      ctx.addIssue({
        code: 'custom',
        message: 'Invalid email',
        path: ['username'],
      });
    }
  });
export type SigninSchema = zod.infer<typeof signinSchema>;

// -----------------------------

export const forgotPasswordSchema = zod.object({
  email: zod
    .string()
    .min(1, 'Email is required')
    .refine((val) => validEmail(val), {
      message: 'Invalid email',
    }),
});
export type ForgotPasswordSchema = zod.infer<typeof forgotPasswordSchema>;

// -----------------------------

export const resetPasswordSchema = zod
  .object({
    password: zod.string().min(8, 'Password must be at least 8 characters'),
    password_confirmation: zod
      .string()
      .min(8, 'Password must be at least 8 characters'),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Passwords do not match',
    path: ['password_confirmation'],
  });
export type ResetPasswordSchema = zod.infer<typeof resetPasswordSchema>;

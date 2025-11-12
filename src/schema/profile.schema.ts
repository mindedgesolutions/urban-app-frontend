import z from 'zod';
import { validEmail, validMobileNumber } from './common.schema';

export const profileSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().min(1, 'Email is required'),
    phone: z.string().optional().nullable(),
  })
  .superRefine((data, ctx) => {
    const email = data.email;
    const phone = data.phone;

    if (email && validEmail(email) === false) {
      ctx.addIssue({
        code: 'custom',
        path: ['email'],
        message: 'Invalid email format',
      });
    }
    if (phone && validMobileNumber(phone) === false) {
      ctx.addIssue({
        code: 'custom',
        path: ['phone'],
        message: 'Invalid mobile number format',
      });
    }
  });
export type ProfileSchema = z.infer<typeof profileSchema>;

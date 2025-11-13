import z from 'zod';
import { fileSize100KB, validEmail, validMobileNumber } from './common.schema';

export const profileSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().min(1, 'Email is required'),
    phone: z.string().optional().nullable(),
    image: z.any().optional().nullable(),
  })
  .superRefine((data, ctx) => {
    const email = data.email;
    const phone = data.phone;
    const file = data.image;

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
    if (!file) return;
    if (typeof file === 'string') return;
    if (!(file instanceof File)) {
      ctx.addIssue({
        path: ['image'],
        code: 'custom',
        message: 'Invalid image file.',
      });
      return;
    }
    if (!file.type.startsWith('image/')) {
      ctx.addIssue({
        path: ['image'],
        code: 'custom',
        message: 'File must be an image (jpg, jpeg, png, webp)',
      });
    }
    if (file.size > Number(fileSize100KB)) {
      ctx.addIssue({
        path: ['image'],
        code: 'custom',
        message: 'Image size cannot exceed 100 KB.',
      });
    }
  });
export type ProfileSchema = z.infer<typeof profileSchema>;

// --------------------------------------

export const changePasswordSchema = z
  .object({
    password: z.string().min(1, 'Password is required'),
    newPassword: z
      .string()
      .min(6, 'New password must be at least 6 characters long'),
    password_confirmation: z.string().min(1, 'Please confirm your password'),
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.password_confirmation) {
      ctx.addIssue({
        code: 'custom',
        path: ['password_confirmation'],
        message: 'Passwords do not match',
      });
    }
  });
export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;

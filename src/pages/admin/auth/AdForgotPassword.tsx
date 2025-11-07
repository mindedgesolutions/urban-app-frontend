import { images, titles } from '@/constants';
import { BathIcon } from 'lucide-react';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  forgotPasswordSchema,
  type ForgotPasswordSchema,
} from '@/schema/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { showSuccess } from '@/utils/show.success';
import { AdSubmitBtn } from '@/components';

const AdForgotPassword = () => {
  document.title = `Forgot Password | ${titles.appTitle}`;
  const navigate = useNavigate();
  const {
    formState: { isSubmitting, errors },
    ...form
  } = useForm<ForgotPasswordSchema>({
    defaultValues: { email: '' },
    mode: 'all',
    resolver: zodResolver(forgotPasswordSchema),
  });

  // -----------------------------

  const handleSubmit = async (data: ForgotPasswordSchema) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    showSuccess(`Password reset link sent to your email`);
    navigate('/admin/reset-password');
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-md">
              <BathIcon className="size-6" />
            </div>
            {titles.siteName}
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <form
              className="flex flex-col gap-6"
              onSubmit={form.handleSubmit(handleSubmit)}
              autoComplete="off"
            >
              <fieldset disabled={isSubmitting}>
                <FieldGroup>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold">Forgot password</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                      Enter your email below to reset your password
                    </p>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      {...form.register('email')}
                      placeholder="john.doe@test.com"
                    />
                    <span className="text-destructive text-xs -mt-2">
                      {errors.email?.message}
                    </span>
                  </Field>
                  <Field>
                    <AdSubmitBtn
                      label="Reset Password"
                      isSubmitting={isSubmitting}
                    />
                  </Field>
                  <FieldSeparator>Or</FieldSeparator>
                  <Field>
                    <FieldDescription className="text-center">
                      Never mind. Take me back to{' '}
                      <Link
                        to={`/admin/sign-in`}
                        className="underline underline-offset-4"
                      >
                        Sign in
                      </Link>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={images.forgotPasswordBg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};
export default AdForgotPassword;

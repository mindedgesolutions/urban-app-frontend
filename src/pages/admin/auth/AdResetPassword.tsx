import { images, titles } from '@/constants';
import { BathIcon, Eye, EyeOffIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import {
  resetPasswordSchema,
  type ResetPasswordSchema,
} from '@/schema/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { showSuccess } from '@/utils/show.success';
import { AdSubmitBtn } from '@/components';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';
import { useState } from 'react';

const AdResetPassword = () => {
  document.title = `Reset Password | ${titles.appTitle}`;
  const navigate = useNavigate();
  const [isText, setIsText] = useState('password');
  const {
    formState: { isSubmitting, errors },
    ...form
  } = useForm<ResetPasswordSchema>({
    defaultValues: { password: '', password_confirmation: '' },
    mode: 'all',
    resolver: zodResolver(resetPasswordSchema),
  });

  // -----------------------------

  const handleSubmit = async (data: ResetPasswordSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    showSuccess('Password has been reset successfully');
    navigate('/admin/sign-in');
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
                    <h1 className="text-2xl font-bold">Reset password</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                      Enter new password, confirm it and you're all set
                    </p>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="password">New password</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id="password"
                        type={isText}
                        {...form.register('password')}
                        placeholder={`*`.repeat(8)}
                      />
                      <InputGroupAddon align="inline-end">
                        <InputGroupButton
                          title={isText === 'text' ? 'Hide' : 'Show'}
                          size="icon-xs"
                          onClick={() =>
                            setIsText(
                              isText === 'password' ? 'text' : 'password'
                            )
                          }
                        >
                          {isText === 'text' ? <EyeOffIcon /> : <Eye />}
                        </InputGroupButton>
                      </InputGroupAddon>
                    </InputGroup>
                    <span className="text-destructive text-xs -mt-2">
                      {errors.password?.message}
                    </span>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="cpassword">
                      Confirm password
                    </FieldLabel>
                    <Input
                      id="cpassword"
                      type="password"
                      {...form.register('password_confirmation')}
                      placeholder={`*`.repeat(8)}
                    />
                    <span className="text-destructive text-xs -mt-2">
                      {errors.password_confirmation?.message}
                    </span>
                  </Field>
                  <Field>
                    <AdSubmitBtn label="Save" isSubmitting={isSubmitting} />
                  </Field>
                  <FieldSeparator>Or</FieldSeparator>
                  <Field>
                    <FieldDescription className="text-center">
                      Never mind. Take me back to{' '}
                      <Link
                        to="/admin/sign-in"
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
          src={images.passwordResetBg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};
export default AdResetPassword;

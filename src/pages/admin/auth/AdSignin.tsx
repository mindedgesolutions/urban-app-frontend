import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { images, titles } from '@/constants';
import { BathIcon, Eye, EyeOffIcon, LockKeyhole, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signinSchema, type SigninSchema } from '@/schema/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';
import { showSuccess } from '@/utils/show.success';
import { AdSubmitBtn } from '@/components';
import refreshFetch from '@/utils/auth/refresh.fetch';
import customFetch from '@/utils/auth/custom.fetch';

const AdSignin = () => {
  document.title = `Admin Sign In | ${titles.siteName}`;
  const navigate = useNavigate();
  const [isText, setIsText] = useState('password');
  const {
    formState: { errors, isSubmitting },
    ...form
  } = useForm<SigninSchema>({
    defaultValues: { username: 'souvik@test.com', password: 'password' },
    mode: 'all',
    resolver: zodResolver(signinSchema),
  });

  // -----------------------------

  const handleSubmit = async (data: SigninSchema) => {
    try {
      const response = await refreshFetch.post(`/auth/login`, data);
      if (response.status === 200) {
        const name = response.data.data.name;
        const oneTimeToken = response.data.one_time_pass;

        await customFetch.post(`/auth/delete-one-time-token/${oneTimeToken}`);

        showSuccess(`Welcome back, ${name}!`);
        navigate('/admin/dashboard');
      }
    } catch (error) {
      if ((error as any).status === 422) {
        Object.entries((error as any)?.response?.data?.errors).forEach(
          ([field, message]) => {
            form.setError(field as keyof SigninSchema, {
              message: message as string,
            });
          }
        );
        return;
      } else {
        form.setError('root', {
          message: 'Incorrect credentials. Please try again',
        });
        return;
      }
    }
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
                    <h1 className="text-2xl font-bold">
                      Login to your account
                    </h1>
                    <p className="text-muted-foreground text-sm text-balance">
                      Enter your email below to login to your account
                    </p>
                  </div>
                  <span className="text-destructive text-center text-xs font-inter -mb-4">
                    {errors.root?.message}
                  </span>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id="email"
                        type="text"
                        {...form.register('username')}
                        placeholder="john.doe@test.com"
                      />
                      <InputGroupAddon>
                        <User />
                      </InputGroupAddon>
                    </InputGroup>
                    <span className="text-destructive text-xs -mt-2">
                      {errors.username?.message}
                    </span>
                  </Field>
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <Link
                        to={`/admin/forgot-password`}
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                        tabIndex={-1}
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <InputGroup>
                      <InputGroupInput
                        id="password"
                        type={isText}
                        {...form.register('password')}
                        placeholder={`*`.repeat(8)}
                      />
                      <InputGroupAddon>
                        <LockKeyhole />
                      </InputGroupAddon>
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
                    <AdSubmitBtn
                      label="Login"
                      submitLabel="Logging in ..."
                      isSubmitting={isSubmitting}
                    />
                  </Field>
                </FieldGroup>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={images.signinBg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};
export default AdSignin;

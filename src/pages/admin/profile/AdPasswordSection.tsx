import { AdErrorWrapper, AdRequired, AdSubmitBtn } from '@/components';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';
import {
  changePasswordSchema,
  type ChangePasswordSchema,
} from '@/schema/profile.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Eye, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

const AdPasswordSection = () => {
  const {
    formState: { errors, isSubmitting },
    ...form
  } = useForm<ChangePasswordSchema>({
    defaultValues: {
      password: '',
      newPassword: '',
      password_confirmation: '',
    },
    mode: 'all',
    resolver: zodResolver(changePasswordSchema),
  });
  const [pass, setPass] = useState({
    password: 'password',
    newPassword: 'password',
  });

  // -----------------------------

  const handleSubmit = async (data: ChangePasswordSchema) => {
    console.log(data);
  };

  // -----------------------------

  const reset = () => {
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <fieldset
        disabled={isSubmitting}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="col-span-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <Label className="text-muted-foreground">
                Old password <AdRequired />:{' '}
              </Label>
              <InputGroup>
                <InputGroupInput
                  type={pass.password}
                  {...form.register('password')}
                  placeholder="Enter your password"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    size="icon-xs"
                    title={pass.password === 'text' ? 'Hide' : 'Show'}
                    onClick={() =>
                      setPass({
                        ...pass,
                        password:
                          pass.password === 'text' ? 'password' : 'text',
                      })
                    }
                  >
                    {pass.password === 'text' ? <EyeOffIcon /> : <Eye />}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
              <AdErrorWrapper msg={errors.password?.message} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <Label className="text-muted-foreground">
                New password <AdRequired />:{' '}
              </Label>
              <InputGroup>
                <InputGroupInput
                  type={pass.newPassword}
                  {...form.register('newPassword')}
                  placeholder="Enter your new password"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    size="icon-xs"
                    title={pass.newPassword === 'text' ? 'Hide' : 'Show'}
                    onClick={() =>
                      setPass({
                        ...pass,
                        newPassword:
                          pass.newPassword === 'text' ? 'password' : 'text',
                      })
                    }
                  >
                    {pass.newPassword === 'text' ? <EyeOffIcon /> : <Eye />}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
              <AdErrorWrapper msg={errors.newPassword?.message} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <Label className="text-muted-foreground">
                Confirm new password <AdRequired />:{' '}
              </Label>
              <InputGroup>
                <InputGroupInput
                  type="password"
                  {...form.register('password_confirmation')}
                  placeholder="Confirm new password"
                />
              </InputGroup>
              <AdErrorWrapper msg={errors.password_confirmation?.message} />
            </div>
          </div>
        </div>
        <div className=""></div>
        <div className="mt-0 flex gap-4">
          <AdSubmitBtn isSubmitting={isSubmitting} label="Save" />
          <Button type="button" variant="outline" onClick={reset}>
            Reset
          </Button>
        </div>
      </fieldset>
    </form>
  );
};
export default AdPasswordSection;

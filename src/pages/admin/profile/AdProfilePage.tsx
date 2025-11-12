import {
  AdContentWrapper,
  AdErrorWrapper,
  AdPageWrapper,
  AdSubmitBtn,
  AdTitleWrapper,
} from '@/components';
import { titles } from '@/constants';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { MailIcon, PhoneIcon, User } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { profileSchema, type ProfileSchema } from '@/schema/profile.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';

const AdProfilePage = () => {
  document.title = `Souvik's Profile | ${titles.siteName}`;
  const {
    formState: { errors, isSubmitting },
    ...form
  } = useForm<ProfileSchema>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    mode: 'all',
    resolver: zodResolver(profileSchema),
  });

  // -----------------------------

  const handleSubmit = async (data: ProfileSchema) => {
    console.log(data);
  };

  // -----------------------------

  const reset = () => {
    form.reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
    form.clearErrors();
  };

  return (
    <AdPageWrapper>
      <AdTitleWrapper title="Souvik's Profile" />
      <AdContentWrapper className="p-2">
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <fieldset disabled={isSubmitting}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-muted-foreground">First name: </Label>
                  <InputGroup>
                    <InputGroupInput
                      type="text"
                      {...form.register('firstName')}
                      placeholder="Enter your first name"
                    />
                    <InputGroupAddon>
                      <User />
                    </InputGroupAddon>
                  </InputGroup>
                  <AdErrorWrapper msg={errors.firstName?.message} />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-muted-foreground">Last name: </Label>
                  <InputGroup>
                    <InputGroupInput
                      type="text"
                      {...form.register('lastName')}
                      placeholder="Enter your last name"
                    />
                    <InputGroupAddon>
                      <User />
                    </InputGroupAddon>
                  </InputGroup>
                  <AdErrorWrapper msg={errors.lastName?.message} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-muted-foreground">Email: </Label>
                  <InputGroup>
                    <InputGroupInput
                      type="text"
                      {...form.register('email')}
                      placeholder="Enter your email"
                    />
                    <InputGroupAddon>
                      <MailIcon />
                    </InputGroupAddon>
                  </InputGroup>
                  <AdErrorWrapper msg={errors.email?.message} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-muted-foreground">Phone: </Label>
                  <InputGroup>
                    <InputGroupInput
                      type="text"
                      {...form.register('phone')}
                      placeholder="Enter your phone number"
                    />
                    <InputGroupAddon>
                      <PhoneIcon />
                    </InputGroupAddon>
                  </InputGroup>
                  <AdErrorWrapper msg={errors.phone?.message} />
                </div>
              </div>
              <div className="mt-0 flex justify-end gap-4">
                <AdSubmitBtn isSubmitting={isSubmitting} label="Save" />
                <Button variant="outline" onClick={reset}>
                  Reset
                </Button>
              </div>
            </fieldset>
          </div>
        </form>
      </AdContentWrapper>
    </AdPageWrapper>
  );
};
export default AdProfilePage;

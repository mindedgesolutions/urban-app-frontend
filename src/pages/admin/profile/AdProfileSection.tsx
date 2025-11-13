import {
  AdErrorWrapper,
  AdRequired,
  AdInputTooltip,
  AdSubmitBtn,
} from '@/components';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { MailIcon, PhoneIcon, User } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { profileSchema, type ProfileSchema } from '@/schema/profile.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { images } from '@/constants';

const AdProfileSection = () => {
  const {
    formState: { errors, isSubmitting },
    ...form
  } = useForm<ProfileSchema>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      image: null,
    },
    mode: 'all',
    resolver: zodResolver(profileSchema),
  });
  const [preview, setPreview] = useState<string>('');

  // -----------------------------

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    form.setValue('image', file, { shouldValidate: true });
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  // -----------------------------

  const handleSubmit = async (data: ProfileSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
  };

  // -----------------------------

  const reset = () => {
    form.reset();
    setPreview('');
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
                First name <AdRequired />:{' '}
              </Label>
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
              <Label className="text-muted-foreground">
                Last name <AdRequired />:{' '}
              </Label>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <Label className="text-muted-foreground">
                Email <AdRequired />:{' '}
              </Label>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <Label className="text-muted-foreground">Phone : </Label>
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
        </div>
        <div className="col-span-1 -mt-4 md:mt-0 flex flex-col justify-start gap-4">
          <section className="grid grid-cols-1 md:grid-cols-4">
            <section className="col-span-2">
              <Label className="text-muted-foreground mb-2">
                Profile Image :{' '}
              </Label>
              <InputGroup>
                <InputGroupInput
                  type="file"
                  onChange={(e) => handleImageChange(e)}
                />
                <InputGroupAddon align="inline-end">
                  <AdInputTooltip msg="Image size cannot be more than 100 KB" />
                </InputGroupAddon>
              </InputGroup>
              <AdErrorWrapper
                msg={errors.image?.message as string}
                className="mt-1"
              />
            </section>
          </section>
          <span className="w-28 h-28 p-1 my-4 md:my-0 border border-dashed border-primary/15 flex justify-center items-center">
            <img
              src={preview ? preview : images.noImage}
              alt="Preview not available"
              className="max-w-full max-h-full object-contain text-xs font-inter text-muted-foreground"
            />
          </span>
        </div>
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
export default AdProfileSection;

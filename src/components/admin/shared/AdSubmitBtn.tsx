import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

type BtnProps = {
  label: string;
  submitLabel?: string;
  isSubmitting: boolean;
  className?: string;
};

const AdSubmitBtn = ({
  label,
  submitLabel,
  isSubmitting,
  className,
}: BtnProps) => {
  return (
    <Button type="submit" className={className} disabled={isSubmitting}>
      {isSubmitting && <Spinner />}
      {isSubmitting ? submitLabel || 'Submitting...' : label}
    </Button>
  );
};
export default AdSubmitBtn;

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

type BtnProps = {
  label: string;
  isSubmitting: boolean;
  className?: string;
};

const AdSubmitBtn = ({ label, isSubmitting, className }: BtnProps) => {
  return (
    <Button type="submit" className={className} disabled={isSubmitting}>
      {isSubmitting && <Spinner />}
      {isSubmitting ? 'Submitting...' : label}
    </Button>
  );
};
export default AdSubmitBtn;

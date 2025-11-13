import { cn } from '@/lib/utils';

type ErrorWrapperProps = {
  msg?: string;
  className?: string;
};

const AdErrorWrapper = ({ msg, className }: ErrorWrapperProps) => {
  return (
    <div className={cn('text-destructive text-xs -mt-1', className)}>{msg}</div>
  );
};
export default AdErrorWrapper;

import { cn } from '@/lib/utils';

const AdContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('p-0 md:p-2', className)}>{children}</div>;
};
export default AdContentWrapper;

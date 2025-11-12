import { cn } from '@/lib/utils';

const AdContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(className)}>{children}</div>;
};
export default AdContentWrapper;

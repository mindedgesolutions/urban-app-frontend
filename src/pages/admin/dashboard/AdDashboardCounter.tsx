import { NumberTicker } from '@/components/ui/number-ticker';

type DashboardCounterProps = {
  label: string;
  count: number;
  className?: string;
  icon: React.ElementType;
};

const AdDashboardCounter = ({
  label,
  count,
  className,
  icon: Icon,
}: DashboardCounterProps) => {
  return (
    <div className={`p-4 bg-muted ${className}`}>
      <div className="flex justify-between items-center gap-2 mb-4">
        <span className="p-2 bg-card rounded-full">
          <Icon className="h-8 w-8 text-chart-1" />
        </span>
        <span className="flex justify-end items-center text-4xl font-bold">
          <NumberTicker
            value={Number(count)}
            delay={0.3}
            startValue={Number(count) > 30 ? Number(count) - 30 : 0}
            className="text-muted-foreground"
          />
        </span>
      </div>
      <div className="text-muted-foreground text-xs font-inter tracking-wider font-semibold uppercase">
        {label}
      </div>
    </div>
  );
};
export default AdDashboardCounter;

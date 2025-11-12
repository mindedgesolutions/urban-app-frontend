import { NumberTicker } from '@/components/ui/number-ticker';
import { CircleAlert, CircleCheckBig, ClipboardClock } from 'lucide-react';

type AdDashboardTasksProps = {
  title: string;
};

const AdDashboardTasks = ({ title }: AdDashboardTasksProps) => {
  return (
    <div>
      <div className="bg-muted text-muted-foreground p-2 text-xs uppercase tracking-wider font-inter font-semibold mb-4">
        {title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 flex flex-col justify-center items-center gap-8 bg-muted rounded-lg">
          <section className="bg-chart-2/50 dark:bg-chart-2/80 p-4 rounded-full mt-4">
            <CircleCheckBig className="text-white" />
          </section>
          <section className="flex flex-col justify-center items-center gap-4 mb-4">
            <span className="text-5xl font-bold">
              <NumberTicker
                value={46}
                delay={0.3}
                startValue={Number(46) > 30 ? Number(46) - 30 : 0}
                className="text-muted-foreground"
              />
            </span>
            <span className="font-inter tracking-wider text-muted-foreground text-sm capitalize">
              completed
            </span>
          </section>
        </div>
        <div className="p-4 flex flex-col justify-center items-center gap-8 bg-muted rounded-lg">
          <section className="bg-chart-1/50 dark:bg-chart-1/80 p-4 rounded-full mt-4">
            <ClipboardClock className="text-white" />
          </section>
          <section className="flex flex-col justify-center items-center gap-4 mb-4">
            <span className="text-5xl font-bold">
              <NumberTicker
                value={15}
                delay={0.3}
                startValue={Number(15) > 30 ? Number(15) - 30 : 0}
                className="text-muted-foreground"
              />
            </span>
            <span className="font-inter tracking-wider text-muted-foreground text-sm capitalize">
              scheduled
            </span>
          </section>
        </div>
        <div className="p-4 flex flex-col justify-center items-center gap-8 bg-muted rounded-lg">
          <section className="bg-chart-4/50 dark:bg-chart-4/80 p-4 rounded-full mt-4">
            <CircleAlert className="text-white" />
          </section>
          <section className="flex flex-col justify-center items-center gap-4 mb-4">
            <span className="text-5xl font-bold">
              <NumberTicker
                value={12}
                delay={0.3}
                startValue={Number(12) > 30 ? Number(12) - 30 : 0}
                className="text-muted-foreground"
              />
            </span>
            <span className="font-inter tracking-wider text-muted-foreground text-sm capitalize">
              upcoming
            </span>
          </section>
        </div>
      </div>
    </div>
  );
};
export default AdDashboardTasks;

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jun', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Jul', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Aug', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Sept', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Oct', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Nov', uv: 2390, pv: 3800, amt: 2500 },
];

type AdDashboardChartThreeProps = {
  title: string;
};

const AdDashboardChartThree = ({ title }: AdDashboardChartThreeProps) => {
  return (
    <div className="min-h-0">
      <div className="bg-muted text-muted-foreground p-2 text-xs uppercase tracking-wider font-inter font-semibold">
        {title}
      </div>
      {/* Row height 25vh - mentioned in AdDashboard.tsx */}
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 5, left: -10, bottom: 5 }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="name"
              stroke="var(--chart-1)"
              tick={<CustomTickX />}
            />
            <YAxis stroke="var(--chart-1)" tick={<CustomTickY />} />
            <Tooltip content={<CustomTooltip />} />
            {/* <Legend /> */}
            <Line
              type="monotone"
              dataKey="pv"
              stroke="var(--chart-1)"
              // activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default AdDashboardChartThree;

const CustomTickX = (props: any) => {
  const { x, y, payload } = props;
  return (
    <text
      x={x}
      y={y + 10}
      textAnchor="middle"
      className="text-xs text-muted-foreground fill-current font-semibold"
    >
      {payload.value}
    </text>
  );
};

const CustomTickY = (props: any) => {
  const { x, y, payload } = props;
  return (
    <text
      x={x - 5}
      y={y + 4}
      textAnchor="end"
      className="text-xs text-muted-foreground fill-current font-semibold"
    >
      {payload.value}
    </text>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-none p-2 shadow-md text-xs text-muted-foreground">
      <p className="font-semibold text-chart-1 dark:text-white">{label}</p>
      {payload.map((item: any) => (
        <p key={item.name} className="capitalize">
          {item.name}:{' '}
          <span className="text-muted-foreground font-medium">
            {item.value}
          </span>
        </p>
      ))}
    </div>
  );
};

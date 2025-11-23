import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type AdDashboardChartOneProps = {
  title: string;
};

const data = [
  { name: 'Jun', uv: 4000 },
  { name: 'Jul', uv: 3000 },
  { name: 'Aug', uv: 1500 },
  { name: 'Sept', uv: 2000 },
  { name: 'Oct', uv: 2780 },
  { name: 'Nov', uv: 1890 },
];

const AdDashboardChartTwo = ({ title }: AdDashboardChartOneProps) => {
  return (
    <div className="min-h-0">
      <div className="bg-muted text-muted-foreground p-2 text-xs uppercase tracking-wider font-inter font-semibold">
        {title}
      </div>
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 0, left: -10, bottom: 0 }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="name"
              stroke="var(--chart-1)"
              tick={<CustomTickX />}
            />
            <YAxis stroke="var(--chart-1)" tick={<CustomTickY />} />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            {/* <Legend /> */}
            <Bar
              dataKey="uv"
              shape={<CustomBarShape />}
              // activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default AdDashboardChartTwo;

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

const CustomBarShape = (props: any) => {
  const { x, y, width, height } = props;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="var(--chart-1)"
        opacity={0.4}
      />
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="none"
        stroke="var(--chart-1)"
        strokeWidth={1}
        opacity={0.6}
      />
    </g>
  );
};

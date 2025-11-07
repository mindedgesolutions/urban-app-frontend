type AdDashboardChartOneProps = {
  title: string;
};

const AdDashboardChartTwo = ({ title }: AdDashboardChartOneProps) => {
  return (
    <div>
      <div className="bg-muted text-muted-foreground p-2 text-xs uppercase tracking-wider font-inter font-semibold">
        {title}
      </div>
      <div className="p-2"></div>
    </div>
  );
};
export default AdDashboardChartTwo;

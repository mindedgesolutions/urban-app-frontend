import { AdContentWrapper, AdPageWrapper, AdTitleWrapper } from '@/components';
import { titles } from '@/constants';
import {
  AdDashboardCounter,
  AdDashboardChartOne,
  AdDashboardChartTwo,
  AdDashboardBooking,
  AdDashboardChartThree,
  AdDashboardTasks,
} from '@/pages';
import { MdOutlinePlumbing } from 'react-icons/md';
import { FaUsers, FaBriefcase, FaRupeeSign } from 'react-icons/fa';

type CounterType = {
  label: string;
  count: number;
  icon: React.ElementType;
};

const counters: CounterType[] = [
  { label: 'Total bookings', count: 100, icon: FaBriefcase },
  { label: 'No. of plumbers', count: 125, icon: FaUsers },
  { label: 'Pending jobs', count: 25, icon: MdOutlinePlumbing },
  { label: 'Revenue this month', count: 12500000, icon: FaRupeeSign },
];

const AdDashboard = () => {
  document.title = `Souvik's Dashboard | ${titles.siteName}`;

  return (
    <AdPageWrapper>
      <AdTitleWrapper
        title={`Souvik's Dashboard`}
        info="This is a test dashboard"
      />
      <AdContentWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8 mb-8 h-[30vh]">
          <AdDashboardChartOne title="Bookings trend" />
          <AdDashboardChartTwo title="Revenue trend" />
          <AdDashboardChartThree title="Subscription trend" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {counters.map((counter) => (
            <AdDashboardCounter
              label={counter.label}
              count={counter.count}
              icon={counter.icon}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <AdDashboardBooking title="Recent transactions" />
          <AdDashboardTasks title="Appointment status" />
        </div>
      </AdContentWrapper>
    </AdPageWrapper>
  );
};
export default AdDashboard;

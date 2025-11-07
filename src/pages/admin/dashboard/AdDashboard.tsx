import { AdContentWrapper, AdPageWrapper, AdTitleWrapper } from '@/components';
import { titles } from '@/constants';
import {
  AdDashboardCounter,
  AdDashboardChartOne,
  AdDashboardChartTwo,
} from '@/pages';
import { MdOutlinePlumbing } from 'react-icons/md';
import { FaUsers, FaBriefcase, FaRupeeSign } from 'react-icons/fa';

const AdDashboard = () => {
  document.title = `Souvik's Dashboard | ${titles.appTitle}`;

  return (
    <AdPageWrapper>
      <AdTitleWrapper
        title={`Souvik's Dashboard`}
        info="This is a test dashboard"
      />
      <AdContentWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <AdDashboardCounter
            label="Total bookings"
            count={100}
            icon={FaBriefcase}
          />
          <AdDashboardCounter
            label="No. of plumbers"
            count={125}
            icon={FaUsers}
          />
          <AdDashboardCounter
            label="Pending jobs"
            count={25}
            icon={MdOutlinePlumbing}
          />
          <AdDashboardCounter
            label="Revenue this month"
            count={125000}
            icon={FaRupeeSign}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <AdDashboardChartOne title="Bookings trend" />
          <AdDashboardChartTwo title="Revenue trend" />
        </div>
        <div className="">
          <div className="bg-muted text-muted-foreground p-2 text-xs uppercase tracking-wider font-inter font-semibold">
            Recent Bookings
          </div>
        </div>
      </AdContentWrapper>
    </AdPageWrapper>
  );
};
export default AdDashboard;

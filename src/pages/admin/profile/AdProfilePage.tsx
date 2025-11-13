import { AdContentWrapper, AdPageWrapper, AdTitleWrapper } from '@/components';
import { titles } from '@/constants';
import { AdProfileSection } from '@/pages';
import AdPasswordSection from './AdPasswordSection';
import { useLocation } from 'react-router-dom';

const AdProfilePage = () => {
  document.title = `Souvik's Profile | ${titles.siteName}`;
  const { pathname } = useLocation();
  const title = pathname.includes('/admin/profile')
    ? "Souvik's Profile"
    : 'Change Password';

  return (
    <AdPageWrapper>
      <AdTitleWrapper title={title} />
      <AdContentWrapper className="p-2">
        {pathname.includes('/admin/profile') ? (
          <AdProfileSection />
        ) : (
          <AdPasswordSection />
        )}
      </AdContentWrapper>
    </AdPageWrapper>
  );
};
export default AdProfilePage;

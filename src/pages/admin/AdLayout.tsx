import { Outlet, useNavigate } from 'react-router-dom';
import { AppSidebar } from '@/components/admin/sidebar/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AdFooter, AdTopnav } from '@/components';
import { showError } from '@/utils/show.error';
import { useEffect } from 'react';

const AdLayout = () => {
  const navigate = useNavigate();

  const unauthenticated = () => {
    showError(`You are not authenticated to access this page.`);
    navigate(`/admin/sign-in`);
  };

  useEffect(() => {
    window.addEventListener('unauthenticated', unauthenticated);
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AdTopnav />
        <div className="min-h-auto md:min-h-[500px]">
          <Outlet />
        </div>
        <AdFooter />
      </SidebarInset>
    </SidebarProvider>
  );
};
export default AdLayout;

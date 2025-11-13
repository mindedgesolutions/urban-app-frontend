import { Outlet } from 'react-router-dom';
import { AppSidebar } from '@/components/admin/sidebar/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AdFooter, AdTopnav } from '@/components';

const AdLayout = () => {
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

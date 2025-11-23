import { Outlet, redirect } from 'react-router-dom';
import { AppSidebar } from '@/components/admin/sidebar/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AdFooter, AdTopnav } from '@/components';
import { restoreAuth } from '@/utils/functions';
import { showError } from '@/utils/show.error';

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

// -----------------------------

export const loader = async () => {
  const loggedIn = await restoreAuth();
  if (!loggedIn) {
    showError('Session expired. Please sign in again.');
    return redirect('/admin/sign-in');
  }
  return null;
};

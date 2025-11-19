import { Outlet, redirect, useNavigate } from 'react-router-dom';
import { AppSidebar } from '@/components/admin/sidebar/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AdFooter, AdTopnav } from '@/components';
import { showError } from '@/utils/show.error';
import { useEffect } from 'react';
import customFetch from '@/utils/auth/custom.fetch';
import { userManager } from '@/utils/auth/user.manager';

const AdLayout = () => {
  const navigate = useNavigate();

  const unauthenticated = () => {
    showError(`You are not authenticated to access this page.`);
    navigate(`/admin/sign-in`);
  };

  // const getCurrentUser = async () => {
  //   try {
  //   } catch (error) {
  //   }
  // }

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

// -----------------------------

export const loader = async () => {
  // const currentUser = userManager.getUser();
  // try {
  //   if (!currentUser) {
  //     const res = await customFetch.get(`/auth/me`);
  //     if (res.status === 200) {
  //       userManager.setUser(res.data.data);
  //     }
  //   }
  //   return null;
  // } catch (error) {
  //   showError(`Failed to load user data. Please try again`);
  //   return redirect(`/admin/sign-in`);
  // }
  return null;
};

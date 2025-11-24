import { BathIcon } from 'lucide-react';
import { NavMain } from '@/components/admin/sidebar/nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import NavUser from './nav-user';
import { titles } from '@/constants';
import { Link } from 'react-router-dom';
import { NavSettings } from './nav-settings';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="mb-2">
              <Link to="/admin/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <BathIcon className="size-5" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none ml-1">
                  <span className="font-medium">{titles.siteName}</span>
                  <span className="">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavSettings />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <NavUser />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

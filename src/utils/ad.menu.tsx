import {
  ArrowBigUpDash,
  BetweenHorizonalStart,
  LandmarkIcon,
  LayoutPanelLeft,
} from 'lucide-react';

export const data: MenuProps[] = [
  {
    title: 'Categories',
    icon: BetweenHorizonalStart,
    children: [
      {
        title: 'Categories',
        url: '/admin/settings/categories',
      },
      {
        title: 'Sub-categories',
        url: '/admin/settings/sub-categories',
      },
    ],
  },
  {
    title: 'Service Details',
    icon: LayoutPanelLeft,
    url: '/admin/settings/service-details',
  },
  {
    title: 'API Reference',
    icon: ArrowBigUpDash,
    children: [
      {
        title: 'Components',
        url: '#',
      },
      {
        title: 'File Conventions',
        url: '#',
      },
      {
        title: 'Functions',
        url: '#',
      },
      {
        title: 'next.config.js Options',
        url: '#',
      },
      {
        title: 'CLI',
        url: '#',
      },
      {
        title: 'Edge Runtime',
        url: '#',
      },
    ],
  },
  {
    title: 'Architecture',
    icon: LandmarkIcon,
    children: [
      {
        title: 'Accessibility',
        url: '#',
      },
      {
        title: 'Fast Refresh',
        url: '#',
      },
      {
        title: 'Next.js Compiler',
        url: '#',
      },
      {
        title: 'Supported Browsers',
        url: '#',
      },
      {
        title: 'Turbopack',
        url: '#',
      },
    ],
  },
];

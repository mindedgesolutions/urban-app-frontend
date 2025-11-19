import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as Pg from '@/pages';
import * as ld from '@/pages/loaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pg.WbLayout />,
    children: [{ index: true, element: <Pg.WbLanding /> }],
  },
  { path: '/admin/sign-in', element: <Pg.AdSignin /> },
  { path: '/admin/forgot-password', element: <Pg.AdForgotPassword /> },
  { path: '/admin/reset-password', element: <Pg.AdResetPassword /> },
  {
    path: '/admin',
    element: <Pg.AdLayout />,
    loader: ld.adLayoutLoader,
    children: [
      { path: 'dashboard', element: <Pg.AdDashboard /> },
      { path: 'profile', element: <Pg.AdProfilePage /> },
      { path: 'change-password', element: <Pg.AdProfilePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

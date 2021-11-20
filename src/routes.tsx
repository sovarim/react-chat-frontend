import MainLayout from 'layouts/MainLayout';
import { Auth, Home } from 'pages';
import { Navigate } from 'react-router';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'auth', element: <Auth /> },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
];

export default routes;

import MainLayout from 'layouts/MainLayout';
import { Login, Home } from 'pages';
import { Navigate } from 'react-router';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
];

export default routes;

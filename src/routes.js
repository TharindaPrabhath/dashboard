/* eslint-disable prettier/prettier */
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import NewUser from './pages/NewUser';
import Opportunity from './pages/Opportunity';
import NewOpportunity from './pages/NewOpportunity';
import Video from './pages/Video';

//  local storege
import useLocalStorage from './utils/localStorage';

// ----------------------------------------------------------------------

export default function Router() {
  const { getAccessToken } = useLocalStorage();
  const isAuth = !!getAccessToken();

  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: isAuth ? <DashboardApp /> : <Navigate to="/login" /> },
        { path: 'user', element: isAuth ? <User /> : <Navigate to="/login" /> },
        { path: 'user/new', element: isAuth ? <NewUser /> : <Navigate to="/login" /> },
        { path: 'opportunity', element: isAuth ? <Opportunity /> : <Navigate to="/login" /> },
        {
          path: 'opportunity/new',
          element: isAuth ? <NewOpportunity /> : <Navigate to="/login" />
        },
        { path: 'video', element: isAuth ? <Video /> : <Navigate to="/login" /> }
        // { path: 'products', element: <Products /> },
        // { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

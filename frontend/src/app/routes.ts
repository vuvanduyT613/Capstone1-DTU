import { HomePage } from './pages/HomePage/Loadable';
import { Admin } from './pages/Admin/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { Authentication } from './pages/Authentication/Loadable';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => HomePage,
  },
  {
    path: '/admin',
    exact: false,
    main: () => Admin,
  },
  {
    path: '/auth',
    exact: false,
    main: () => Authentication,
  },

  {
    path: '*',
    exact: true,
    main: () => NotFoundPage,
  },
];

export default routes;

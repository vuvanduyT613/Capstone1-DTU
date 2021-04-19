import { HomePage } from './pages/HomePage/Loadable';
import { Admin } from './pages/Admin/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';

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
    path: '*',
    exact: true,
    main: () => NotFoundPage,
  },
];

export default routes;

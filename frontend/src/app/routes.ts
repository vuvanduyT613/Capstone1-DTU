import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => HomePage,
  },
  {
    path: '*',
    exact: true,
    main: () => NotFoundPage,
  },
];

export default routes;

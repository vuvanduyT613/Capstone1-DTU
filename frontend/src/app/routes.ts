import { HomePage } from './pages/HomePage/Loadable';
import { Admin } from './pages/Admin/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { Authentication } from './pages/Authentication/Loadable';
import { ClinicPage } from './pages/ClinicPage/Loadable';
import { RedirectTo } from './pages/Redirect';
import { Detail } from './pages/Detail';
import { Delivery } from './pages/Delivery';
import { Personal } from './pages/Personal';
import { DetailClinic } from './pages/DetailClinic';
import { SearchInterested } from './pages/SearchInterested';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => RedirectTo,
  },
  {
    path: '/doctor',
    exact: true,
    main: () => HomePage,
  },
  {
    path: '/doctor/detail',
    exact: false,
    main: () => Detail,
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
    path: '/clinic',
    exact: true,
    main: () => ClinicPage,
  },
  {
    path: '/clinic/detail',
    exact: false,
    main: () => DetailClinic,
  },
  {
    path: '/delivery',
    exact: true,
    main: () => Delivery,
  },
  {
    path: '/personal',
    exact: true,
    main: () => Personal,
  },
  {
    path: '/clinic/searchinterested',
    exact: false,
    main: () => SearchInterested,
  },
  {
    path: '*',
    exact: true,
    main: () => NotFoundPage,
  },
];

export default routes;

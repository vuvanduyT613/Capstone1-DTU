/**
 *
 * Admin
 *
 */
import * as React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';

//@ts-ignore
import Adminlayout from './layouts/Admin';

interface Props {}

export function Admin(props: Props) {
  return <>{Cookies.get('access_token') ? <Adminlayout /> : <Redirect to="/auth" />}</>;
}

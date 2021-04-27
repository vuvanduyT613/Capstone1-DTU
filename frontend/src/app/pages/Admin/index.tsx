/**
 *
 * Admin
 *
 */
import * as React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';

//@ts-ignore
import Adminlayout from './layouts/Admin';

interface Props {}

export function Admin(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      {Cookies.get('access_token') ? <Adminlayout /> : <Redirect to="/auth" />}
    </>
  );
}

import * as React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router';
export function RedirectTo() {
  return (
    <>
      {Cookies.get('access_token') && Cookies.get('role') === 'user' ? (
        <Redirect to="/doctor" />
      ) : (
        <Redirect to="/auth" />
      )}
    </>
  );
}

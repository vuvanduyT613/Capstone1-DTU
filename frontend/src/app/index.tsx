import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '../styles/global-styles';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import routes from './routes';
import { authenticationRefreshToken } from 'utils/apis';

export function App() {
  const { i18n } = useTranslation();

  const renderRoute = () => {
    let element;
    if (routes.length > 0) {
      element = routes.map((value, index) => (
        <Route key={index} exact={value.exact} path={value.path} component={value.main()} />
      ));
    }
    return element;
  };

  React.useEffect(() => {
    setInterval(async () => {
      //@ts-ignore
      const { data } = await authenticationRefreshToken({
        token: Cookies.get('access_token'),
        refresh: Cookies.get('refresh_token'),
      });
      if (data) {
        Cookies.set('access_token', data.access.token);
        Cookies.set('refresh_token', data.refresh.token);
      }
    }, 600000);
  }, []);

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Switch>{renderRoute()}</Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

// libs import
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// routers
import routers from '@/routers';
// components
// interceptors
import { doAxiosRequestIntercept } from '@/configs/Interceptors';
// others

const Main = () => {
  doAxiosRequestIntercept();
  return (
    <Switch>
      {routers.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Route key='/not-found' />
    </Switch>
  );
};

export default Main;
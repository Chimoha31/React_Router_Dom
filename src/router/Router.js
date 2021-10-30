// import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import MenuRoute from "../router/MenuRoute";
import ContactRoute from "./ContactRoute";
import Page404 from '../components/Page404';

const Router = () => {
  return (
    <Switch>
      {/* Home */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Menu */}
      <Route
        path="/Menu"
        render={({ match: { url } }) => (
          <Switch>
            {MenuRoute.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />

      {/* Contact */}
      <Route
        path="/Contact"
        render={({ match: { url } }) => (
          <Switch>
            {ContactRoute.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
        {/* どれにも一致しない場合、Page404を表示 */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};

export default Router;

// import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import MenuRoute from "../router/MenuRoute";
import ContactRoute from "./ContactRoute";

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
      render={({ match : { url } }) => (
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
    </Switch>
  );
};

export default Router;

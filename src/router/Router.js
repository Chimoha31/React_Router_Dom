// import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import MenuRoute from "../router/MenuRoute";

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
      <Route path="/Contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default Router;

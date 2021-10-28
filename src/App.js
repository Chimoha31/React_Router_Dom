import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import MenuMainFoods from './components/MenuMainFoods';
import MenuDessert from './components/MenuDessert';
import Contact from "./components/Contact";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        {/* Home */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* Menu */}
        <Route
          path="/Menu"
          render={({ match: url }) => (
            <Switch>
              <Route exact path={url}><Menu /></Route>
              <Route path={`${url}/MenuMainFoods`}><MenuMainFoods /></Route>
              <Route path={`${url}/MenuDessert`}><MenuDessert /></Route>
            </Switch>
          )}
        />

        {/* Contact */}
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;

import "./App.css";
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const App = () => {
  return(
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
        <Route exact path="/"><Home /></Route>
        <Route path="/Menu"><Menu /></Route>
        <Route path="/Contact"><Contact /></Route>
      </Switch>
    </BrowserRouter>
    )   
};
export default App;

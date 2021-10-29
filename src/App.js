import { BrowserRouter, Link} from "react-router-dom";
import Router from './router/Router';
import "./App.css";

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

      <Router />
    </BrowserRouter>
  );
};
export default App;

import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { AddCar } from "./pages/AddCar";
import { AppCars } from "./pages/AppCars";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/cars">AppCars</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          {/* <Redirect from="/" to="/cars" /> */}
          <Route path="/cars">
            <AppCars />
          </Route>
          <Route path="/add">
            <AddCar />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

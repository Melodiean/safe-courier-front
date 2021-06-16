import './App.css';
import { Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Landing />
      <Switch>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />

        <Route path="/profile" component={Profile} />
       
      </Switch>
    </div>
  );
}

export default App;

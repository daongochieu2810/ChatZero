import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/home/Home";
import { baseUrl } from "./constants";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Router basename={baseUrl}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

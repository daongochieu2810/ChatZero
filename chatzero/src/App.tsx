import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/home/Home";
import { baseUrl } from "./constants";

function App() {
  const queryClient = new QueryClient();
  //console.log(process.env.CLIENT_ENV);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Router basename={baseUrl}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/register" component={Register} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;

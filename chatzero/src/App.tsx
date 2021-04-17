import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/home/Home";
import { baseUrl } from "./constants";

import globalStorage from "./data/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const queryClient = new QueryClient();
  //console.log(process.env.CLIENT_ENV);
  return (
    <Provider store={globalStorage.store}>
      <PersistGate persistor={globalStorage.persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;

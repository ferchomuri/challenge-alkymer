import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdateApp from "./routes/UpdateApp";
import AppDetailPage from "./routes/AppDetailPage";
import { AppsContextProvider } from "./context/AppsContext";

const App = () => {
  return (
    <AppsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/app/:id/update" component={UpdateApp} />
            <Route exact path="/app/:id" component={AppDetailPage} />
          </Switch>
        </Router>
      </div>
    </AppsContextProvider>
  );
};

export default App;

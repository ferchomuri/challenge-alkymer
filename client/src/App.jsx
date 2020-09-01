import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import AppDetailPage from "./routes/AppDetailPage";
import { AppsContextProvider } from "./context/AppsContext";

const App = () => {
  return (
    <AppsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/app/:id/update" component={UpdatePage} />
            <Route exact path="/app/:id" component={AppDetailPage} />
          </Switch>
        </Router>
      </div>
    </AppsContextProvider>
  );
};

export default App;

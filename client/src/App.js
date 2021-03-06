import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contract from "./pages/Contract";
import Create from "./pages/Create";
import Settings from "./pages/Settings";

function App() {

  return (
      <Router>
          <Route exact path={"/"} component={Login} />
          <Route exact path={"/register"} component={Register} />
          <Route exact path={"/members"} component={Contract} />
          <Route exact path={"/members/post"} component={Create} />
          <Route exact path={"/members/admin"} component={Settings} />
      </Router>
  );
}

export default App;

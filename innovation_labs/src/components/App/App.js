import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Main from "../Main/Main";
import Login from "../LogIn/LoginForm"
import { Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    );
  }
}

export default App;

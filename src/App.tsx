import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

import PasswordReset from './routes/user/password-reset';
import SignIn from './routes/user/sign-in';
import SignUp from './routes/user/sign-up';
import Home from './routes/home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="password-reset">
          <PasswordReset />
        </Route>
        <Route path="signin">
          <SignIn />
        </Route>
        <Route path="signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

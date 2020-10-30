import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Logo from '../components/logo';
import NavBar from '../components/nav-bar';
import Chats from '../routes/chats';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="layout-navigation">
          <Logo />
          <NavBar />
        </div>
        <div className="layout-sidebar">
          <Switch>
            <Route path="/chats">
              <Chats></Chats>
            </Route>
            <Route exact path="/">
              <Redirect to="/chats" />
            </Route>
          </Switch>
        </div>
        <div className="layout-main"></div>
      </div>
    );
  }
}

export default Layout;
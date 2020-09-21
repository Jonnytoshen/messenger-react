import React from 'react';
import Logo from '../components/logo';
import NavBar from '../components/nav-bar';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="layout-navigation">
          <Logo />
          <NavBar />
        </div>
        <div className="layout-sidebar"></div>
        <div className="layout-main"></div>
      </div>
    );
  }
}

export default Layout;
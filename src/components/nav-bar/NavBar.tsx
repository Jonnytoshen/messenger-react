import React from 'react';
import Icon from '../icon';
import NavBarLink from '../nav-bar-link';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <ul className="navbar">
        <li className="navbar-item-blank"></li>
        <li className="navbar-item">
          <NavBarLink iconType="edit" iconSize="large" link="/" title="Create chat" />
        </li>
        <li className="navbar-item">
          <NavBarLink iconType="users" iconSize="large" link="/" title="Friends" />
        </li>
        <li className="navbar-item">
          <NavBarLink iconType="message-square" iconSize="large" link="/" title="Chats" hasDot active />
        </li>
        <li className="navbar-item">
          <NavBarLink iconType="user" iconSize="large" link="/" title="User" />
        </li>
        <li className="navbar-item-blank"></li>
        <li className="navbar-item">
          <NavBarLink iconType="settings" iconSize="large" link="/" title="Settings" />
        </li>
      </ul>
    );
  }
}

export default NavBar;
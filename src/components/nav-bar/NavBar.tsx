import React from 'react';
import NavBarLink from '../nav-bar-link';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <ul className="navbar">
        <li className="navbar-item-blank"></li>
        <li className="navbar-item">
          <NavBarLink iconType="edit" iconSize="large" link="/create-group" title="Create chat" />
        </li>
        <li className="navbar-item">
          <NavBarLink iconType="users" iconSize="large" link="/friends" title="Friends" />
        </li>
        <li className="navbar-item">
          <NavBarLink iconType="message-square" iconSize="large" link="/chats" title="Chats" hasDot />
        </li>
        <li className="navbar-item">
          <NavBarLink iconType="user" iconSize="large" link="/user" title="User" />
        </li>
        <li className="navbar-item-blank"></li>
        <li className="navbar-item">
          <NavBarLink iconType="settings" iconSize="large" link="/settings" title="Settings" />
        </li>
      </ul>
    );
  }
}

export default NavBar;
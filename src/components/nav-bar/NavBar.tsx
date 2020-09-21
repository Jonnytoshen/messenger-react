import React from 'react';
import Icon from '../icon';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <ul className="navbar">
        <li className="navbar-item">
          <a className="navbar-link" href="/" title="Create chat">
            <Icon type="edit" size="large" />
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="/" title="Friends">
            <Icon type="users" size="large" />
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="/" title="Chats">
            <Icon type="message-square" size="large" />
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="/" title="User">
            <Icon type="user" size="large" />
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="/" title="Settings">
            <Icon type="settings" size="large" />
          </a>
        </li>
      </ul>
    );
  }
}

export default NavBar;
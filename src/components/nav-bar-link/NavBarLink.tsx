import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon, { IconSize } from '../icon';
import './NavBarLink.scss';

export interface NavBarLinkProps {
  iconType: string,
  iconSize: IconSize,
  link: string,
  title?: string,
  hasDot?: boolean
}

class NavBarLink extends React.Component<NavBarLinkProps> {
  render() {
    return (
      <NavLink className="navbar-link" activeClassName="navbar-link-active" to={this.props.link} title={this.props.title}>
        <Icon type={this.props.iconType} size={this.props.iconSize} />
        { this.props.hasDot && <span className="navbar-link-dot"></span> }
      </NavLink>
    );
  }
}

export default NavBarLink;
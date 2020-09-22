import React from 'react';
import Icon, { IconSize } from '../icon';
import './NavBarLink.scss';

export interface NavBarLinkProps {
  iconType: string,
  iconSize: IconSize,
  link?: string,
  title?: string,
  hasDot?: boolean,
  active?: boolean
}

class NavBarLink extends React.Component<NavBarLinkProps> {

  constructor(props: NavBarLinkProps) {
    super(props);
  }

  render() {
    const classNames = ['navbar-link'];
    if (this.props.active) {
      classNames.push('navbar-link-active');
    }
    return (
      <a className={ classNames.join(' ') } href={this.props.link} title={this.props.title}>
        <Icon type={this.props.iconType} size={this.props.iconSize} />
        { this.props.hasDot && <span className="navbar-link-dot"></span> }
      </a>
    );
  }
}

export default NavBarLink;
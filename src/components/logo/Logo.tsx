import React from 'react';
import { ReactComponent as LogoSVG } from '../../logo.svg';
import './Logo.scss';

class Logo extends React.Component {
  render() {
    return (
      <a className="logo" href="/">
        <LogoSVG />
      </a>
    );
  }
}

export default Logo;
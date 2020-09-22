import React from 'react';
import './Icon.scss';

export type IconSize = 'small' | 'default' | 'large';

export interface IconProps {
  type: string;
  size?: IconSize
}

export interface LogoState {
  className: string
}

class Icon extends React.Component<IconProps, LogoState> {
  constructor(props: IconProps) {
    super(props);
    const classNames: string[] = [];
    classNames.push(`icon-${props.type}`);
    if (props.size === 'large' || props.size === 'small') {
      classNames.push(`icon-size-${props.size}`);
    }
    this.state = {
      className: classNames.join(' ')
    };
  }

  render() {
    return (<i className={this.state.className}></i>);
  }
}

export default Icon;
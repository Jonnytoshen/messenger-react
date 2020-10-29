import React from 'react';
import classNames from 'classnames';
import './Avatar.scss';

export type AvatarSize = 'small' | 'default' | 'large';

export type AvatarStatus = 'online'|'offline'|undefined;

export interface AvatarProps {
  src?: string;
  size?: AvatarSize;
  title?: string;
  status?: AvatarStatus,
  showDot?: boolean
}


class Avatar extends React.Component<AvatarProps> {

  render() {
    const { status, size, src, title } = this.props;
    const classnames = classNames({
      'avatar': true,
      'avatar-small': size === 'small',
      'avatar-large': size === 'large',
      'avatar-online': status === 'online',
      'avatar-offline': status === 'offline'
    });
    return (
      <div className={classnames}>
        <img className="avatar-img" src={src} alt={title} />
        {this.renderDot()}
      </div>
    );
  }

  private renderDot(): React.ReactNode {
    const { showDot, status } = this.props;
    return showDot && status
      ? (
        <span className="avatar-dot"></span>
      )
      : null;
  }

}

export default Avatar;
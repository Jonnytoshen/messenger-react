import React from 'react';
import classNames from 'classnames';

import './Card.scss';

export interface CardProps {
  className?: string;
  style?: React.CSSProperties
}

const Card: React.FC<CardProps> = ({
  className,
  style,
  children,
  ...resetProps
}) => {
  const classnames = classNames('mrt-card', className);

  return (
    <div 
    className={classnames}
    style={style}
    {...resetProps}
    >
      <div className="mrt-card-body">{children}</div>
    </div>
  );
};

export default Card;
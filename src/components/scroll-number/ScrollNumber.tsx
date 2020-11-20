import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './ScrollNumber.scss';

function getNumberArray(num: string | number | undefined | null): any[] {
  return num
    ? num
        .toString()
        .split('')
        .reverse()
        .map(i => {
          const current = Number(i);
          return isNaN(current) ? i : current;
        })
    : [];
}

export interface ScrollNumberProps {
  className?: string;
  count?: string | number | null;
  onAnimated?: Function;
  style?: React.CSSProperties;
  title?: string | number | null;
}

export interface ScrollNumberState {
  animateStarted?: boolean;
  count?: string | number | null;
  prevCount?: string | number | null;
  lastCount?: string | number | null;
}

const ScrollNumber: React.FC<ScrollNumberProps> = ({
  count: customizeCount,
  className,
  style,
  title,
  onAnimated = () => {},
  ...restProps
}) => {
  const [animateStarted, setAnimateStarted] = useState(true);
  const [count, setCount] = useState(customizeCount);
  const [prevCount, setPrevCount] = useState(customizeCount);
  const [lastCount, setLastCount] = useState(customizeCount);

  if (prevCount !== customizeCount) {
    setAnimateStarted(true);
    setPrevCount(customizeCount);
  }

  useEffect(() => {
    let timeout: number;
    setLastCount(count);
    
    if (animateStarted) {
      timeout = setTimeout(() => {
        setAnimateStarted(false);
        setCount(customizeCount);
        onAnimated();
      });
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [ animateStarted, customizeCount, onAnimated ]);

  const getPositionByNum = (num: number, i: number): number => {
    const currentCount = Math.abs(Number(count));
    const lstCount = Math.abs(Number(lastCount));
    const currentDigit = Math.abs(getNumberArray(count)[i] as number);
    const lastDigit = Math.abs(getNumberArray(lstCount)[i] as number);

    if (animateStarted) {
      return 10 + num;
    }

    // 同方向则在同一侧切换数字
    if (currentCount > lstCount) {
      if (currentDigit >= lastDigit) {
        return 10 + num;
      }
      return 20 + num;
    }
    if (currentDigit <= lastDigit) {
      return 10 + num;
    }
    return num;
  };

  const renderNumberList = (position: number, className: string): React.ReactElement<any>[] => {
    const childrenToReturn: React.ReactElement<any>[] = [];

    for (let i = 0; i < 30; i++) {
      childrenToReturn.push(
        <p
          key={i.toString()}
          className={classNames(className, {
            current: position === i,
          })}
        >
          {i % 10}
        </p>,
      );
    }

    return childrenToReturn;
  };

  const renderCurrentNumber = (num: number | string, i: number): React.ReactNode => {
    if (typeof num === 'number') {
      const position = getPositionByNum(num, i);
      const removeTransition = animateStarted || getNumberArray(lastCount)[i] === undefined;
      const numberList = renderNumberList(position, `scroll-number-only-unit`);

      return React.createElement(
        'span',
        {
          className: `scroll-number-only`,
          style: {
            transition: removeTransition ? 'none' : undefined,
            msTransform: `translateY(${-position * 100}%)`,
            WebkitTransform: `translateY(${-position * 100}%)`,
            transform: `translateY(${-position * 100}%)`,
          },
          key: i,
        },
        numberList,
      );
    }

    return (
      <span key="symbol" className={`scroll-number-symbol`}>
        {num}
      </span>
    );
  };

  const renderNumberElement = (): React.ReactNode => {
    if (count && Number(count) % 1 === 0) {
      return getNumberArray(count)
        .map((num, i) => renderCurrentNumber(num, i))
        .reverse();
    }
    return count;
  };

  const newProps = {
    className: classNames('scroll-number', className),
    style,
    title: title as string,
  };

  if (style && style.borderColor) {
    newProps.style = {
      ...style,
      boxShadow: `0 0 0 1px ${style.borderColor} inset`,
    };
  }

  return (
    <sup {...newProps}>
      {renderNumberElement()}
    </sup>
  );
}

export default ScrollNumber;
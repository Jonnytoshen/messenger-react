import React from 'react';
import classNames from 'classnames';
import './Input.scss';

export type InputSize = 'small' | 'default' | 'large';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>  {
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  size?: InputSize;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export interface InputState {
  value: any,
  focused?: boolean
}

class Input extends React.Component<InputProps, InputState> {

  input!: HTMLInputElement;

  constructor(props: InputProps) {
    super(props);
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    this.state = {
      value
    };
  }

  focus(): void {
    this.input.focus();
  };

  blur(): void {
    this.input.blur();
  }

  onFocus(e: React.FocusEvent<HTMLInputElement>): void {
    const { onFocus } = this.props;
    this.setState({ focused: true });
    if (onFocus) {
      onFocus(e);
    }
  }

  onBlur(e: React.FocusEvent<HTMLInputElement>): void {
    const { onBlur } = this.props;
    this.setState({ focused: false });
    if (onBlur) {
      onBlur(e);
    }
  }

  setValue(value: string, callback?: () => void): void {
    if (this.props.value === undefined) {
      this.setState({ value }, callback);
    }
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setValue(e.target.value);
  }

  handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    const { onKeyDown, onPressEnter } = this.props;
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  render() {
    const { prefix, suffix, size, ...otherProps } = this.props;
    const prefixComponent = prefix ? <span className="input-prefix">{ prefix }</span> : null;
    const suffixComponent = suffix ? <span className="input-suffix">{ suffix }</span> : null;
    const classnames = classNames({
      'input-wrapper': true,
      'input-small': size === 'small',
      'input-large': size === 'large'
    });
    return (
      <span className={classnames}>
        { prefixComponent }
        <input 
        className="input"
        {...otherProps}
        onChange={(e) => this.handleChange(e)}
        onFocus={(e) => this.onFocus(e)}
        onBlur={(e) => this.onBlur(e)}
        onKeyDown={(e) => this.handleKeyDown(e)} />
        { suffixComponent }
      </span>
    );
  }
}

export default Input;
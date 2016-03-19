import React, { PropTypes } from 'react';

import styles from '../styles/button';

class Button extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    styles: PropTypes.object
  };

  static defaultProps = {
    styles
  };

  handleKeyDown(event) {
    if (event.keyCode === 32) { // space
      this.props.onClick && this.props.onClick(event);
    }
  }

  handleMouseDown(event) {
    if (this.props.disabled) {
      event.preventDefault();
    } else {
      this.props.onMouseDown && this.props.onMouseDown(event);
    }
  }

  handleMouseUp(event) {
    if (this.props.disabled) {
      event.preventDefault();
    } else {
      this.props.onMouseUp && this.props.onMouseUp(event);
    }
  }

  render() {
    const { styles, disabled, onClick } = this.props;
    const classes = [styles.button];
    if (disabled) classes.push(styles.disabled);

    return (
      <div
        role="button"
        tabIndex="-1"
        onMouseDown={::this.handleMouseDown}
        onMouseUp={::this.handleMouseUp}
        className={classes.join(' ')}
        onClick={!disabled && onClick}
        onKeyDown={::this.handleKeyDown}
        onFocus={this.props.onFocus}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;

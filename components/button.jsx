import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Button extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    styles: PropTypes.object
  };

  handleKeyDown(event) {
    if (event.keyCode === 32) { // space
      this.props.onClick && this.props.onClick(event);
    }
  }

  handleMouseDown(event) {
    event.preventDefault();
    if (!this.props.disabled) {
      this.props.onMouseDown && this.props.onMouseDown(event);
    }
  }

  handleMouseUp(event) {
    event.preventDefault();
    if (!this.props.disabled) {
      this.props.onMouseUp && this.props.onMouseUp(event);
    }
  }

  render() {
    const { disabled } = this.props;
    const styles = this.props.styles || buttonStyles;

    return (
      <div
        role="button"
        tabIndex="-1"
        onMouseDown={::this.handleMouseDown}
        onMouseUp={::this.handleMouseUp}
        className={css(styles.base, styles.button, disabled && styles.disabled)}
        onClick={!this.props.disabled && this.props.onClick}
        onKeyDown={::this.handleKeyDown}
        onFocus={this.props.onFocus}
      >
        {this.props.children}
      </div>
    );
  }
}

const disabled = {
  border: '1px solid #b3b3b3',
  backgroundImage: 'linear-gradient(#eee, #ccc)',
  color: '#888'
};

export const buttonStyles = StyleSheet.create({
  base: {
    cursor: 'default',
    display: 'inline-flex',
    height: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,
    padding: '0 10px',
    fontSize: 13
  },

  button: {
    backgroundImage: 'linear-gradient(#eee, #ccc)',
    border: '1px solid #999',
    textShadow: '0 1px 1px rgba(255, 255, 255, .75)',

    ':hover': {
      backgroundImage: 'linear-gradient(#f4f4f4, #d4d4d4)'
    },

    ':active': {
      backgroundImage: 'linear-gradient(#bbb, #ddd)',
      borderColor: '#777 #999 #999 #777',
      color: '#000'
    }
  },

  disabled: {
    ...disabled,
    ':hover': disabled,
    ':active': disabled
  }
});

export default Button;

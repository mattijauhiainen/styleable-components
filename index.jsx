import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

import Button, { buttonStyles } from './components/button';

const App = () => (
  <div>
    <Button>Default</Button>
    <br /><br />
    <Button styles={styles}>Styled</Button>
    <br /><br />
    <Button disabled={true}>Woohoo</Button>
  </div>
);

const styles= StyleSheet.create({
  button: {
    ...buttonStyles.base._definition,
    border: '2px solid lightskyblue',
    cursor: 'pointer',
    width: 400,

    ':hover': {
      backgroundColor: 'pink'
    },

    ':active': {
      backgroundColor: 'red'
    }
  }
});

ReactDOM.render(<App />, document.getElementById('main'));

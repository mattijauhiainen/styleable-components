import React from 'react';
import ReactDOM from 'react-dom';

import Button, { buttonStyleDef } from './components/button';
import { StyleSheet, Presets, LookRoot } from 'react-look';

const App = () => (
  <div>
    <Button>Default</Button>
    <br /><br />
    <Button styles={identicalStyles}>Default</Button>
    <br /><br />
    <Button styles={pinkyStyles}>Styled</Button>
    <br /><br />
    <Button disabled={true}>Woohoo</Button>
    <br /><br />
    <Button styles={funkyStyles}>Woohoo</Button>
  </div>
);

const identicalStyles = StyleSheet.create(buttonStyleDef);
const pinkyStyles = StyleSheet.create({
  ...buttonStyleDef,
  button: {
    ...buttonStyleDef.button,
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

const funkyStyles = StyleSheet.create({
  ...buttonStyleDef,
  button: {
    ...buttonStyleDef.button,
    width: (props, state) => state.width
  }
})
const config = Presets['react-dom'];

ReactDOM.render(<LookRoot config={config}><App /></LookRoot>, document.getElementById('main'));

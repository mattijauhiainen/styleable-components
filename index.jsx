import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/button';
import flashy from './styles/custom_button';
import noGradient from './styles/no_gradient_button';

const App = () => (
  <div style={{ width: 200 }}>
    <Button>Default</Button>
    <br />
    <Button styles={flashy}>Styled</Button>
    <br />
    <Button styles={noGradient}>Woohoo</Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('main'));
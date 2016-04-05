import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/button';
import flashy from './styles/custom_button';
import noGradient from './styles/no_gradient_button';
import oneProp from './styles/oneprop';

const App = () => (
  <div>
    <Button>Default</Button>
    <br />
    <Button styles={flashy}>Styled</Button>
    <br />
    <Button styles={noGradient}>Woohoo</Button>
    <br />
    <Button styles={oneProp}>Meh</Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('main'));

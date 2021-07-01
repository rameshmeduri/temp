import React from 'react';
import { render } from 'react-dom';
import C1 from './Components/C1';
import C2 from './Components/C2';
import C3 from './Components/C3';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="container">
    <C1 />
    <C2 />
    <C3 />
  </div>
);

render(<App />, document.getElementById('root'));

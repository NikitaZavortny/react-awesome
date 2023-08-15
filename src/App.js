import React from 'react';
import  Home  from './awesome-templates/home-template.jsx';
import HomeFooter from './awesome-components/footers/footer-home.jsx';
import MiniFooter from './awesome-components/footers/footer-mini.jsx';
import CurveTransition from './awesome-components/transitions/curve-transition.jsx';

import "./bootstrap.css";

function App() {
  return (
    <div align="center">

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
      
      <Home/>
      <h1>This is an empty react project :D</h1>
      <CurveTransition />
    </div>
  );
}

export default App;

import React from 'react';
import Home from './design/awesome-templates/home-template.jsx';
import HomeFooter from './design/awesome-components/footers/footer-home.jsx';
import MiniFooter from './design/awesome-components/footers/footer-mini.jsx';
import CurveTransitionTemplate from './design/awesome-templates/curve-transition-template.jsx';

import "./bootstrap.css";
import "./curves.css";

function App() {
  return (
    <div align="center">

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
      
      <Home>
        <h1>This is an design react project :D</h1>
        <CurveTransitionTemplate />
      </Home>
      <HomeFooter/>
    </div>
  );
}

export default App;

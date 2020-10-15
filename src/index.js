import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import './sass/custom.scss';
import './sass/styles.scss';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-180628590-1');
ReactGA.pageview(window.location.pathname + window.location.search);
 
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);
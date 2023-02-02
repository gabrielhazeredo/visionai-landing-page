import React from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserRouter, Route, Provider } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

ReactDOM.render(
  // <Router history={history} basename="/visionai-landing-page/">
  //   <App />
  // </Router>,


  <BrowserRouter  basename={window.location.pathname || ''}>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';

console.log(Provider, Router, Route)

ReactDOM.render(
  <Provider store={store}> 
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

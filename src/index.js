import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import reducer from './reducer.js';
import {LIMIT, PAGE} from './enums/PAGINATION';
import './index.css';
import App from './App';
import configureStore from './redux/configureStore';
import * as serviceWorker from './serviceWorker';

const store = configureStore({reducer});

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router>
              <Route exact path="/">
                  <Redirect to={`/phones-list?limit=${LIMIT}&page=${PAGE}`} />
              </Route>
              <Route path="/" component={App} />
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

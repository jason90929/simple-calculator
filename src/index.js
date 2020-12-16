import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/rootReducer';
import '@/assets/styles/entry.scss';

if (process.env.REACT_APP_ENV === 'prod'
  && process.env.NODE_ENV === 'production') {
  console.log = function () {};
}

const initialState = {};
const middleware = [];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleware)),
);

const render = function () {
  const HotApp = hot(App);
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <HotApp />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (module.hot) {
  module.hot.addStatusHandler(function (status) {
    console.log('status:', status);
  });

  module.hot.accept('./store/rootReducer', function () {
    store.replaceReducer(rootReducer);
    render();
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/style.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById('root');

function render() {
  // eslint-disable-next-line react/jsx-filename-extension
  ReactDOM.render(<App />, rootEl);
}

// Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application
// is running, without a full reload. This can significantly speed up development in a few ways:

// Retain application state which is lost during a full reload.
// Save valuable development time by only updating what's changed.
// Instantly update the browser when modifications are made to CSS/JS in the source code,
// which is almost comparable to changing styles directly in the browser's dev tools.

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

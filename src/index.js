import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const renderApp = () => {
  // Re-render application, with some wrappers for React-Router
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

// Build the application
const buildApp = async () => {
  const root = document.getElementById('app');
  const app = await renderApp();
  render(app, root);
};

// Invoke the build app method
buildApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

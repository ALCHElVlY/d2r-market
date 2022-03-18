// Import react & react-router-dom
import React from 'react';
import ReactDOM from 'react-dom';

// Import the app
import App from './App';

// Import the store file and the provider from redux
import { store } from './app/store.js';
import { Provider } from 'react-redux';

// Import the function for recording web vitals
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

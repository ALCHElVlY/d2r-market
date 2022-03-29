// Builtin imports
import React from 'react';

// External imports
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Internal imports
import App from './App';
import { store } from './app/store.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	// eslint-disable-next-line no-undef
	document.getElementById('root'),
);
reportWebVitals();

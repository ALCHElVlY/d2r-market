// Builtin imports
import React from 'react';

// External imports
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Internal imports
import App from './App';
import { store } from './app/store.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
reportWebVitals();

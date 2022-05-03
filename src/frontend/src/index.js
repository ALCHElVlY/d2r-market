// Builtin imports
import React from 'react';

// External imports
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Internal imports
import App from './App';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
// import { DataProvider } from './components/Providers/DataProvider';
import { store, Persistor } from './app/storage/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={Persistor}>
			<AuthProvider>
				<App />
			</AuthProvider>
		</PersistGate>
	</Provider>
);
reportWebVitals();

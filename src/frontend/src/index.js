// Builtin imports
import React from "react";

// External imports
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Internal imports
import App from "./App";
import { AuthProvider } from "./components/Providers/AuthProvider";
import { store, Persistor } from "./app/storage/store.js";
import { PersistGate } from "redux-persist/integration/react";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("diabloii_react"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={Persistor}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PersistGate>
  </Provider>,
);

// If we want our app to work offline and load faster, we can change
// unregister() to register() below. Note this comes with some pitfalls.
// Additional info about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();

// If we want to start measuring performance in the app, we can pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

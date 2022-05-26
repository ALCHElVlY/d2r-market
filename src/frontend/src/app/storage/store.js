// External imports
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { encryptTransform } from "redux-persist-transform-encrypt";

// Internal imports
import {
  authReducer,
  oauthReducer,
  usersReducer,
} from "../../app/reducers/index";

const rootReducerConfig = {
  key: "session",
  storage,
  version: 1,
  stateReconciler: autoMergeLevel2,
  transforms: [encryptTransform({ secretKey: "some-super-secret-key" })],
  whiteList: ["auth", "oauth", "users"],
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const rootReducer = persistReducer(
  rootReducerConfig,
  combineReducers({
    auth: authReducer,
    oauth: oauthReducer,
    users: usersReducer,
  }),
);

export const store = createStore(rootReducer, composedEnhancer);
export const Persistor = persistStore(store);

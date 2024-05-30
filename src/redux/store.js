import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localstorage
// import root
import { rootReducer } from "./rootReducer";

//Persist Configuration
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReducer,
});

// Create the persistor
export const persistor = persistStore(store);

export default store;

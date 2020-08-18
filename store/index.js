import { useMemo } from 'react'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "../reducers";

let store;

const logger = createLogger({
  collapsed: true,
  level: "info",
});

const enhancer = process.env.NODE_ENV === "development"
  ? applyMiddleware(thunk, logger)
  : applyMiddleware(thunk);

function initStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') {
    return _store;
  }
  // Create the store once in the client
  if (!store) {
    store = _store;
  }

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

/* const persistentState = {};

const logger = createLogger({
    collapsed: true,
    level: "info",
});

let enhancer = process.env.NODE_ENV === "development"
    ? applyMiddleware(thunk, logger)
    : applyMiddleware(thunk);

export const initializeStore = (initialState = {}) => createStore(
    rootReducer,
    initialState,
    enhancer,
); */

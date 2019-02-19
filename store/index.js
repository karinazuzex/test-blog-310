import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "reducers";

const persistentState = {};

const logger = createLogger({
    collapsed: true,
    level: "info",
});

let enhancer = process.env.NODE_ENV === "development"
    ? applyMiddleware(thunk, logger)
    : applyMiddleware(thunk);

export const initializeStore = (initialState = JSON.parse(JSON.stringify(persistentState))) => createStore(
    rootReducer,
    initialState,
    enhancer,
);

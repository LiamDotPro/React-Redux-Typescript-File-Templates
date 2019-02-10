import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, createStore} from "redux";
import {initialState, rootReducer, State} from "./storeModules";
import {composeWithDevTools} from "redux-devtools-extension";
import rootSaga from "./storeModules/statements/sagas/sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = createStore<State, any, any, any>(rootReducer, initialState, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));

// Start our saga middleware running
sagaMiddleware.run(rootSaga);
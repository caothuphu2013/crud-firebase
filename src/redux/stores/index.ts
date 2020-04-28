import { createBrowserHistory } from 'history';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducers from '../reducers';
import rootSagas from '../sagas';

const initialState = {

}
//export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const middlewares = [sagaMiddleware, logger];

const composeEnhancers = compose;
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducers,initialState, enhancers);

sagaMiddleware.run(rootSagas);

export { store };
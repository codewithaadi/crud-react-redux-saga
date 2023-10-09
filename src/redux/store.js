import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/userSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware,logger];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga); 

export default store;
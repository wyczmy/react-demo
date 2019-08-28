import { createStore, applyMiddleware } from 'redux';
import addSum from './reduce/index';
import createSagaMiddleware from 'redux-saga'
import { watchIncrementAsync } from './saga/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(addSum, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchIncrementAsync)
export default store;
import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../reducer/reducer'
// import moneyReducer from '../reducer/reducer'
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {watchBlogLoad} from '../../sagas/saga'
const sagaMiddleWare = createSagaMiddleware();
const myStore = createStore(rootReducer, applyMiddleware(logger,sagaMiddleWare));
sagaMiddleWare.run(watchBlogLoad)
export default myStore;
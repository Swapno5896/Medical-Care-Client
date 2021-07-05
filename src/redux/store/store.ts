import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../reducer/reducer'
// import moneyReducer from '../reducer/reducer'
import logger from "redux-logger";
const myStore = createStore(rootReducer, applyMiddleware(logger));
export default myStore;
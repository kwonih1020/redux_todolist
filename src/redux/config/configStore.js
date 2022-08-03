import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todo";
import logger from 'redux-logger';

const rootReducer = combineReducers({
  todos: todos
});
const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

export default store;

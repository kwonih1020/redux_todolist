import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todo";

const rootReducer = combineReducers({
  todos: todos
});
const store = createStore(rootReducer);

export default store;

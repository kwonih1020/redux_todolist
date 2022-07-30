import { createStore } from "redux";
import { combineReducers } from "redux";

import inputs from "../modules/todo";

const rootReducer = combineReducers({
  inputs: inputs,
});

const store = createStore(rootReducer);

export default store;

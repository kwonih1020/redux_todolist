// eslint-disable-next-line

// import { createStore, applyMiddleware } from "redux";
// import { combineReducers } from "redux";
import todos from "../modules/todoSlice";
// import logger from 'redux-logger';

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos: todos.reducer,
  },
});

export default store;

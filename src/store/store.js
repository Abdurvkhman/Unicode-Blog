import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import categoriesReducer from "../reducers/categoriesReducer";

export const store = createStore(categoriesReducer, applyMiddleware(thunk));

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { moviesReducer } from "../reducer/movieReducer";
import thunk from "redux-thunk";
//1- Create Store
export const filmyStore = createStore(moviesReducer, applyMiddleware(thunk));

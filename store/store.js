import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from 'redux-thunk';
import blog from "./blogReducer";
import asset from "./assetReducer";
import assets from "./assetsReducer";

const rootReducer = combineReducers({
  blog,
  asset,
  assets
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
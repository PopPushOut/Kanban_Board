import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import gridColumns from "./gridColumns";
import comments from "./comments";

const rootReducer = combineReducers({
  gridColumns,
  comments,
  routing: routerReducer
});

export default rootReducer;

/**
 * App Reducers
 */
import { combineReducers } from "redux";
import tableReducer from "./tableReducer";

const reducers = combineReducers({
    tableReducer:tableReducer
  });
  
  export default reducers;
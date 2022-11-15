import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import { setDataReducer } from "./dataReducers";

const RootReducer = combineReducers({
  auth: AuthReducer,
  setData: setDataReducer,
});

export default RootReducer;

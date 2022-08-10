import { combineReducers } from "redux";
import Auth from "./reducer/auth";
import Signup from "./reducer/signup";

const rootReducer = combineReducers({
  auth: Auth,
  signup: Signup,
});

export default rootReducer;
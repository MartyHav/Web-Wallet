import { combineReducers } from "redux";

// Reduceers
import currentTheme from "./currentTheme.js";
import auth from "./auth.js";

const rootReducer = combineReducers({
  theme: currentTheme,
  auth: auth
});

export default rootReducer;

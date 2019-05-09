import { combineReducers } from "redux";

// Reduceers
import currentTheme from "./currentTheme.js";

const rootReducer = combineReducers({
  theme: currentTheme
});

export default rootReducer;

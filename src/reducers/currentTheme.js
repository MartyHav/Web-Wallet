import { THEME } from "../actions/types.js";

const INITIAL_STATE = { theme: "theme.dark" };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case THEME:
      return action.payload;
    default:
      return state;
  }
}

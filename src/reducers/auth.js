import { THEME } from "../actions/types.js";

export default function(state = false, action) {
  switch (action.type) {
    case THEME:
      return [...state, action.payload];
    default:
      return state;
  }
}

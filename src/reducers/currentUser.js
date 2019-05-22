import { USER } from "../actions/types.js";

export default function(state = {}, action) {
  switch (action.type) {
    case USER:
      return action.payload;
    default:
      return state;
  }
}

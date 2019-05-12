import { AUTH } from "../actions/types.js";

export default function(state = false, action) {
  console.log("REDUCER", action.payload);
  switch (action.type) {
    case AUTH:
      return [...state, action];
    default:
      return state;
  }
}

import { THEME, AUTH } from "./types.js";

export const selectTheme = theme => ({
  type: THEME,
  payload: theme
});

export const authUser = auth => ({
  type: AUTH,
  payload: auth
});

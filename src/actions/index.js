import { THEME, AUTH } from "./types.js";

const test = {};

export const currentTheme = theme => ({
  type: THEME,
  payload: "dark"
});

export const authUser = auth => ({
  type: AUTH,
  auth: auth
});

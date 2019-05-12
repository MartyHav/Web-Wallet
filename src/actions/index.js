import { THEME } from "./types.js";

const test = {};

export const currentTheme = theme => ({
  type: THEME,
  payload: "dark"
});

export const authUser = auth => ({
  type: THEME,
  payload: auth
});

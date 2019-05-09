import { THEME } from "./types.js";

export const currentTheme = theme => ({
  type: THEME,
  payload: theme
});

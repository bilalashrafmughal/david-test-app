import { themeConfig } from "./themeConfig";

export const getTheme = (themeName = "light") => {
  const requiredTheme = themeConfig[themeName];
  if (!requiredTheme) {
    return themeConfig["light"];
  }
  return requiredTheme;
};

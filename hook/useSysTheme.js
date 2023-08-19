import { useColorScheme } from "react-native";
import { themeLit,themeDark } from "../uiConfig";

export const useSysTheme = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const theme = isDarkMode ? themeDark : themeLit;
  console.log(isDarkMode,colorScheme);
  return theme;
};

import { themeContext } from "./ThemeProvider";
import { useContext } from 'react';


const useTheme = () => {
  const theme = useContext(themeContext);
  return theme
}
export default useTheme
/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";


const themeContext = createContext()

const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => setTheme(theme === 'dark'? 'light' : 'dark')

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}
export default ThemeProvider
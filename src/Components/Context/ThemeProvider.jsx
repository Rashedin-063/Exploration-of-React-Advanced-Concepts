/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";


const themeContext = createContext()

const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  
  const themeStyle = {
    backgroundColor: theme === 'dark'? '#333' : '#fff',
    color: theme === 'dark'? '#fff' : '#333',
    transition: 'background-color 0.5s ease, color 0.5s ease'
  }

  return (
    <themeContext.Provider value={{ theme, toggleTheme, themeStyle }}>
      {children}
    </themeContext.Provider>
  );
}
export default ThemeProvider
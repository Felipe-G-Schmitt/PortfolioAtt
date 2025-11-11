import React, { createContext, useState, useEffect } from 'react';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const themeClass = isDarkMode ? 'dark-mode' : 'light-mode';
  const Icon = isDarkMode ? FaRegMoon : FaRegSun;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeClass, Icon }}>
      {children}
    </ThemeContext.Provider>
  );
};
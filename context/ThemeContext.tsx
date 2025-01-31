/*
"use client"; 

import React, { createContext, useContext, useState } from 'react';

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


<ThemeProvide>USE THOSE TAGS</ThemeProvide>
${isDarkTheme ? 'text-white' : 'text-black'} THEME SELECTION IN CLASSNAME
//Toggle from UIVERSE
<label className="switch">
<input type="checkbox" className={`${isDarkTheme ? "Light Theme" : "Dark Theme"}`} checked={isDarkTheme} onChange={toggleTheme} />
<span className="slider"></span>
</label>
//CSS CODES
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 1.5em;
}


.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border: 2px solid #414141;
  border-radius: 50px;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.slider:before {
  position: absolute;
  content: "";
  height: 1em;
  width: 1em;
  top: 0.1em;
  left: 0.2em;
  bottom: 0.2em;
  background-color: black;
  border-radius: inherit;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.switch input:checked + .slider {
  box-shadow: 0 0 20px rgba(9, 117, 241, 0.8);
  border: 2px solid #0974f1;
  background-color: transparent;
}

.switch input:checked + .slider:before {
  transform: translateX(1.8em);
  background-color: white;
}

.sticky {
  position: sticky;
  top: 0; 
  z-index: 10;
}

*/
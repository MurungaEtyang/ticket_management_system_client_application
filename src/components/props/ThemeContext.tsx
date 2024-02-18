
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    darkMode: false,
    toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ darkMode, toggleDarkMode, children }) => {
    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

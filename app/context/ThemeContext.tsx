'use client';

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme : Theme;
    toggleTheme : () => void;
}
// Context creation
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// creating provider component
export const ThemeProvider = ({children}:{ children : React.ReactNode}) => {
    const [theme, setTheme] = useState<Theme>("light");

     // Mount pe theme load karo from localStorage 
    useEffect(() => {
        const stored = localStorage.getItem('theme') as Theme;
        if(stored){
            setTheme(stored);
            document.body.setAttribute('data-bs-theme',stored);
        }
    },[]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.setAttribute('data-bs-theme',newTheme);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

// Step 3: Custom hook for cleaner usage


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) throw new Error("useTheme must be used inside ThemeProvider");
    return context;
} 

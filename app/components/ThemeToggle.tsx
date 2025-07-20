'use client';

import { useTheme } from "../context/ThemeContext";
import { Button } from "react-bootstrap";
import { Moon, Sun } from "react-bootstrap-icons";


export default function ThemeToggle(){
    const {theme , toggleTheme} = useTheme();
    
    return(
        <div className="text-end mb-3">
            <Button variant={theme === 'light' ? 'dark' : 'light'} onClick={toggleTheme}>
                {theme === 'light' ? <Moon /> : <Sun />} {theme === 'light' ? 'Dark' : "Light"}
            </Button>
        </div>
    )
}
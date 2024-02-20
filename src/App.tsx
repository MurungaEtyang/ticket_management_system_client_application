
import React, { useState, useEffect } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { ThemeProvider } from "./views/components/props/ThemeContext";
import { Index } from "./views/Index";
import './App.css';
import { AdminDashboard } from "./views/admin/AdminDashboard";
import {RegisterUser} from "./views/admin/users/RegisterUser";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <body>
        <ThemeProvider darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
            <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
                <button className={`toggleButton`} onClick={toggleDarkMode}>
                    {darkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
                </button>
                {/*<Index />*/}
                <AdminDashboard />
                {/*<RegisterUser />*/}
            </div>
        </ThemeProvider>
        </body>
    );
}

export default App;

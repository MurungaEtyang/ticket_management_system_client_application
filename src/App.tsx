
import React, { useState, useEffect } from 'react';
import { MdToggleOff, MdToggleOn } from 'react-icons/md';
import { ThemeProvider } from "./components/props/ThemeContext";
import { Home } from "./views/Home";
import './App.css';

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
                        {darkMode ? <MdToggleOff /> : <MdToggleOn />}
                    </button>
                    <Home />
                </div>
            </ThemeProvider>
        </body>
    );
}

export default App;

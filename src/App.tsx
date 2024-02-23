
import React, { useState, useEffect } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { ThemeProvider } from "./views/components/props/ThemeContext";
import './resource_files/css/App.css';
import { AdminDashboard } from "./views/admin/AdminDashboard";
import { Index } from "./views/Index";
import ChatModal from './views/others/ChatModal';
import { FaComment } from "react-icons/fa";
import { BeatLoader } from 'react-spinners';
import { Home } from "./views/Home";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [showChatModal, setShowChatModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [colorIndex, setColorIndex] = useState(0);
    const [authority, setAuthority] = useState(sessionStorage.getItem('user_data'));

    let userdata = null;
    console.log(authority);
    if (authority) {
        userdata = JSON.parse(authority);
        console.log(userdata);
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleChatModal = () => {
        setShowChatModal(!showChatModal);
    };

    useEffect(() => {
        // Simulate loading for 3 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    useEffect(() => {
        // Change color every 2 seconds
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            setAuthority(sessionStorage.getItem('user_data'));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const getColor = () => {
        switch (colorIndex) {
            case 0:
                return '#2d00f5';
            case 1:
                return 'rgba(27,38,215,0.75)';
            case 2:
                return '#422ea8';
            default:
                return 'rgba(2,0,255,0.75)';
        }
    };

    return (
        <body>
        <ThemeProvider darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
            <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
                {isLoading ? (
                    <div className="loader-container">
                        <div className="loader">
                            <BeatLoader color="blue" size={40} />
                            <div className="loader-text" style={{ color: getColor() }}>
                                POWERED BY TMS...
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <button className={`toggleButton`} onClick={toggleDarkMode}>
                            {darkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
                        </button>
                        <div>
                            {userdata && userdata[0].authority === 'admin' && userdata[0].token ? (
                                <AdminDashboard />
                            ) : userdata && userdata[0].authority === 'user' ? (
                                <Home />
                            ) : (
                                <Index />
                            )}
                            {showChatModal && <ChatModal />}
                        </div>
                        <button className={`toggleChatButton`} onClick={toggleChatModal}><FaComment /></button>
                    </>
                )}
            </div>
        </ThemeProvider>
        </body>
    );
}

export default App;

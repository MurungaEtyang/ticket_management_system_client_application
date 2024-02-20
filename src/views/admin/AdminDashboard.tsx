
import React, { useState } from 'react';
import '../../resource_files/css/style.css';

import { AdminNavLinks } from "../components/navs/AdminNavLinks";
import { Button } from "../components/props/Button";

export const AdminDashboard = () => {
    const [clickedButton, setClickedButton] = useState("");

    const handleButtonClick = (label: string) => {
        setClickedButton(label);
        alert(label); // Use the 'label' parameter instead of 'clickedButton'
    };

    // Define an array of button configurations
    const buttons = [
        { label: "M-Report", onClick: () => handleButtonClick("M-Report") },
        { label: "T-Report", onClick: () => handleButtonClick("T-Report") },
        { label: "D-Report", onClick: () => handleButtonClick("D-Report") },
        // Add more button configurations here
    ];

    return (
        <div className="home-container">
            <div className={`admin-nav-data`}>
                <AdminNavLinks />
            </div>

            <div className={`reports`} >
                {/* Render buttons dynamically */}
                {buttons.map((button, index) => (
                    <Button key={index} label={button.label} onClick={button.onClick} />
                ))}
            </div>
        </div>
    );
};

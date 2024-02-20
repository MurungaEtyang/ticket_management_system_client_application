import "../../../resource_files/css/nav.css";
import React from 'react';
import Nav from '../props/Nav_bar';

export const HomeNavLinks = () => {
    const navLinks = [
        { label: 'Home', url: '/' },
        { label: 'FAQS', url: 'faqs' },
        { label: 'GUEST', url: 'guest' },
    ];

    const handleAdminLinks = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
        event.preventDefault(); // Prevents the default browser navigation behavior

        alert("Hello World!");
    };

    return (
        <div className="navbar">
            <Nav links={navLinks} onClick={handleAdminLinks}/>
        </div>
    );
};


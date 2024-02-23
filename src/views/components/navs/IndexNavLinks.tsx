import React, { useState, useEffect } from 'react';
import Nav from '../props/Nav_bar';
import { CustomText } from "../props/CustomText";
import { Login } from "../inputs/Login";
import FAQ from "../../others/FaqsClient";
import GuestBooking from "../../tickets/GuestBooking";

export const IndexNavLinks = () => {

    const [renderComponent, setRenderComponent] = useState<React.ReactNode>(<Login />);

    useEffect(() => {
        // Update the URL when the page loads
        window.history.pushState(null, '', '/');
    }, []);

    const handleNavClick = (event: { preventDefault: () => void }, url: string) => {
        event.preventDefault();
        if (url === '/') {
            setRenderComponent(<Login />);
        } else if (url === '/faqs') {
            setRenderComponent(<FAQ />);
        } else if (url === '/guest') {
            setRenderComponent(<GuestBooking />);
        }
        else {
            setRenderComponent(<CustomText label={"hello default"} />);
        }

        // window.history.pushState(null, '', url);
    };

    const navLinks = [
        { label: 'HOME', url: '/' },
        { label: 'FAQS', url: '/faqs' },
        { label: 'GUEST', url: '/guest' }
    ];

    return (
        <div className="navbar">

            <div style={{ marginBottom: "40px" }} className={`index-navbar`}>
                <Nav links={navLinks} onClick={(event: { preventDefault: () => void; }, url: string) => handleNavClick(event, url)} />
            </div>

            <div className={`admin-nav-components`}> {renderComponent} </div>
        </div>
    );
};

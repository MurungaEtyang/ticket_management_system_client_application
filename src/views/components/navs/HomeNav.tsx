import "../../../resource_files/css/nav.css";
import React, { useState } from 'react';
import Nav from '../props/Nav_bar';
import { CustomText } from "../props/CustomText";
import UserTicketBooking from "../../tickets/UserTicketBooking";
import UserTickets from "../../tickets/UserTickets";
import OpenTickets from "../../tickets/OpenTickets";
import PendingTickets from "../../tickets/PendingTickets";
import ClosedTickets from "../../tickets/ClosedTickets";
import FaqsClient from "../../others/FaqsClient";
import {Dashboard} from "../../Dashboard";

export const HomeNav = () => {
    const [linkIsCurrent, setLinkIsCurrent] = useState(false);
    const [renderComponent, setRenderComponent] = useState<React.ReactNode>(null);

    const handleAdminLinks = (event: { preventDefault: () => void; }, url: string) => {
        event.preventDefault();

        if (url === '/book_tickets') {
            setRenderComponent(<UserTicketBooking />);
        } else if (url === '/all_user_tickets') {
            setRenderComponent(<UserTickets />);
        } else if (url === '/open_tickets') {
            setRenderComponent(< OpenTickets />);
        } else if (url === '/pending_tickets') {
            setRenderComponent(<PendingTickets />);
        } else if (url === '/closed_tickets') {
            setRenderComponent(< ClosedTickets />);
        } else if (url === '/faqs') {
            setRenderComponent(< FaqsClient />);
        }
        else if (url === '/change_email') {
            setRenderComponent(<CustomText label={"Hello Change Email"} />);
        } else if (url === '/change_password') {
            setRenderComponent(<CustomText label={"Hello Change Password"} />);
        } else if (url === '/logout') {
            setRenderComponent(<CustomText label={"hello logout"} />);
        } else if (url === '/dashboard') {
            setRenderComponent(<Dashboard />);
        } else {
            setRenderComponent(<CustomText label={"Hello Default"} />);
        }

        // window.history.pushState(null, '', url);
    };

    const navLinks = [
        { label: 'DASHBOARD', url: '/dashboard' },

        {label: 'Menu',
            dropdownOptions: [
                { label: 'Faqs', url: '/faqs' },

            ],
        },

        {label: 'Book TICKETS', url: '/book_tickets'},
        {label: 'Tickets',
            dropdownOptions: [
                { label: 'All Tickets', url: '/all_user_tickets' },
                { label: 'Open Tickets', url: '/open_tickets' },
                { label: 'Pending Tickets', url: '/pending_tickets' },
                { label: 'Closed Tickets', url: '/closed_tickets' },
            ],
        }, {
            label: 'PROFILE',
            dropdownOptions: [
                { label: 'Evans murunga', url: '/change_email' },
                { label: 'Change Password', url: '/change_password' },
                { label: 'Logout', url: '/logout' },
            ],
        }
    ];

    return (
        <>
            <div className="admin-navbar">
                <div className={`top-nav-bar`}>
                    <Nav links={navLinks} onClick={(event: { preventDefault: () => void; }, url: string) => handleAdminLinks(event, url)} />
                </div>
                <div className={`admin-nav-components`}> {renderComponent} </div>
            </div>
        </>
    );
};

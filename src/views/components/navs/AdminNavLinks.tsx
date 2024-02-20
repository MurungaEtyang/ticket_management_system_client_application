import "../../../resource_files/css/nav.css";
import React, { useState } from 'react';
import Nav from '../props/Nav_bar';
import { RegisterUser } from "../../admin/users/RegisterUser";
import { CustomText } from "../props/CustomText";
import ElevateUser from "../../admin/users/ElevateUser";
import DowngradeUser from "../../admin/users/DowngradeUser";
import AllUser from "../../admin/users/AllUser";
import GetAllTickets from "../../admin/tickets/GetAllTickets";

export const AdminNavLinks = () => {
    const allowedUrls = [
        '/register', '/all_users', '/promote_user', '/demote_user',
        '/tickets', '/guest_tickets',
        '/create_department', '/all_departments', '/add_users_to_department',
        '/remove_users_from_department', '/best_department',
        '/general_settings', '/change_email', '/change_password', '/logout'
    ];

    const [renderComponent, setRenderComponent] = useState<React.ReactNode>(null);

    const handleAdminLinks = (event: { preventDefault: () => void; }, url: string) => {
        event.preventDefault();

        if (url === '/register') {
            setRenderComponent(<RegisterUser />);
        } else if (url === '/all_users'){
            setRenderComponent( <AllUser /> )
        } else if (url === '/promote_user'){
            setRenderComponent(<ElevateUser />)
        } else if (url === '/demote_user'){
            setRenderComponent(<DowngradeUser />)
        } else if (url === '/members_report'){
            setRenderComponent(<CustomText label={"Hello Report"} />)
        } else if (url === '/tickets'){
            setRenderComponent(< GetAllTickets />)
        } else if (url === '/guest_tickets'){
            setRenderComponent(< CustomText label={"Hello Guests tickets"}/>)
        } else if(url === '/ticket_report'){
            setRenderComponent(<CustomText label={"Hello Ticket Report"} />)
        } else if(url === '/create_department'){
            setRenderComponent(<CustomText label={"Hello Create Department"} />)
        } else if(url === '/all_departments'){
            setRenderComponent(<CustomText label={"Hello All Departments"} />)
        } else if(url === '/add_users_to_department'){
            setRenderComponent(<CustomText label={"Hello Add Users to Department"} />)
        } else if(url === '/remove_users_from_department'){
            setRenderComponent(<CustomText label={"Hello Remove Users from Department"} />)
        } else if(url === '/best_department'){
            setRenderComponent(<CustomText label={"Hello best department"} />)
        } else if(url === '/department_report'){
            setRenderComponent(<CustomText label={"Hello Department Report"} />)
        } else if(url === '/general_settings'){
            setRenderComponent(<CustomText label={"Hello General Settings"} />)
        } else if(url === '/change_email'){
            setRenderComponent(<CustomText label={"Hello Change Email"} />)
        } else if(url === '/change_password'){
            setRenderComponent(<CustomText label={"Hello Change Password"} />)
        } else if(url === '/logout'){
            setRenderComponent(<CustomText label={"Hello Logout"} />)
        } else if(url === '/'){
            setRenderComponent(<CustomText label={"You are on dashboard"} />)
        }
        else {
            setRenderComponent(<CustomText label={"Hello Default"} />)
        }
    };

    const navLinks = [
        { label: 'DASHBOARD', url: '/' },
        {
            label: 'MEMBERS',
            dropdownOptions: [
                { label: 'Register', url: '/register' },
                { label: 'Users', url: '/all_users' },
                { label: 'Promotion', url: '/promote_user' },
                { label: 'Demotion', url: '/demote_user' },
            ],
        },
        {
            label: 'TICKETS',
            dropdownOptions: [
                { label: 'Tickets', url: '/tickets' },
                { label: 'Guest Tickets', url: '/guest_tickets' },
            ],
        },
        {
            label: 'DEPARTMENTS',
            dropdownOptions: [
                { label: 'create depart', url: '/create_department' },
                { label: 'all departments', url: '/all_departments' },
                { label: 'add users', url: '/add_users_to_department' },
                { label: 'remove users', url: '/remove_users_from_department' },
                { label: 'Best Depart', url: '/best_department' },
            ],
        },
        { label: 'SETTINGS', dropdownOptions: [{ label: 'General Settings', url: '/general_settings' }] },
        {
            label: 'PROFILE',
            dropdownOptions: [
                { label: 'Evans murunga', url: '/change_email' },
                { label: 'Change Password', url: '/change_password' },
                { label: 'Logout', url: '/logout' },
            ],
        }
    ];

    return (
        <div className="admin-navbar">
            <div className={`top-nav-bar`}>
                <Nav links={navLinks} onClick={(event: { preventDefault: () => void; }, url: string) => handleAdminLinks(event, url)} />
            </div>

            <div className={`admin-nav-components`}> {renderComponent} </div>
        </div>
    );
};

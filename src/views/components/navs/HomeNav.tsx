import "../../../resource_files/css/nav.css";
import React, { useState } from 'react';
import Nav from '../props/Nav_bar';
import { RegisterUser } from "../../admin/users/RegisterUser";
import { CustomText } from "../props/CustomText";
import ElevateUser from "../../admin/users/ElevateUser";
import DowngradeUser from "../../admin/users/DowngradeUser";
import AllUser from "../../admin/users/AllUser";
import GetAllTickets from "../../admin/tickets/GetAllTickets";
import AssignTicket from "../../admin/tickets/AssignTicket";
import CreateDepartment from "../../admin/department/CreateDepartment";
import AddUserToDepartment from "../../admin/department/AddUserToDepartment";
import AllDepartments from "../../admin/department/AllDepartments";
import Faqs from "../../admin/setting/Faqs";
import {Index} from "../../Index";

export const HomeNav = () => {

    const [renderComponent, setRenderComponent] = useState<React.ReactNode>(null);

    const handleAdminLinks = (event: { preventDefault: () => void; }, url: string) => {
        event.preventDefault();

        if (url === '/register') {
            setRenderComponent(<RegisterUser />);
        } else if (url === '/all_users') {
            setRenderComponent(<AllUser />);
        } else if (url === '/promote_user') {
            setRenderComponent(<ElevateUser />);
        } else if (url === '/demote_user') {
            setRenderComponent(<DowngradeUser />);
        } else if (url === '/tickets') {
            setRenderComponent(<GetAllTickets />);
        } else if (url === '/guest_tickets') {
            setRenderComponent(<AssignTicket />);
        } else if (url === '/create_department') {
            setRenderComponent(<CreateDepartment />);
        } else if (url === '/all_departments') {
            setRenderComponent(<AllDepartments />);
        } else if (url === '/add_users_to_department') {
            setRenderComponent(<AddUserToDepartment />);
        } else if (url === '/remove_users_from_department') {
            setRenderComponent(<CustomText label={"Hello Remove Users from Department"} />);
        } else if (url === '/best_department') {
            setRenderComponent(<CustomText label={"Hello best department"} />);
        } else if (url === '/general_settings') {
            setRenderComponent(<CustomText label={"Hello General Settings"} />);
        } else if (url === '/faqs') {
            setRenderComponent(< Faqs />);
        } else if (url === '/change_email') {
            setRenderComponent(<CustomText label={"Hello Change Email"} />);
        } else if (url === '/change_password') {
            setRenderComponent(<CustomText label={"Hello Change Password"} />);
        } else if (url === '/logout') {
            setRenderComponent(<Index />);
        } else if (url === '/admin') {
            setRenderComponent(<CustomText label={"You are on dashboard"} />);
        } else {
            setRenderComponent(<CustomText label={"Hello Default"} />);
        }

        // window.history.pushState(null, '', url);
    };

    const navLinks = [
        { label: 'DASHBOARD', url: '/dashboard' },
        {
            label: 'Tickets',
            dropdownOptions: [
                { label: 'All Tickets', url: '/register' },
                { label: 'Open Tickets', url: '/all_users' },
                { label: 'Pending Tickets', url: '/promote_user' },
                { label: 'Closed Tickets', url: '/demote_user' },
            ],
        },
        {
            label: 'Book TICKETS',
            dropdownOptions: [
                { label: 'Tickets', url: '/book_tickets' },
                { label: 'Guest Tickets', url: '/guest_tickets' },
            ],
        },
        {
            label: 'Menu',
            dropdownOptions: [
                { label: 'Faqs', url: '/faqs' },

            ],
        },
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


import React from 'react';
import TicketPropsForm, { TicketFormData } from '../components/props/GuestTicketFormProps';

const TicketPage: React.FC = () => {
    const handleTicketFormSubmit = (data: TicketFormData) => {
        // Perform the necessary logic with the form data
        console.log(data);
    };

    return (
        <div>
            <h1>Guest Ticket Reservation</h1>
            <TicketPropsForm onSubmit={handleTicketFormSubmit} />
        </div>
    );
};

export default TicketPage;

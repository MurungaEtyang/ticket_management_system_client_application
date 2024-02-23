
import React, { useState } from "react";
import { CustomText } from "../components/props/CustomText";
import { BeatLoader } from 'react-spinners';

export const SearchTicket = () => {
    const [searchId, setSearchId] = useState("");
    const [showTickets, setShowTickets] = useState(false);
    const [loading, setLoading] = useState(false);

    const tickets = [
        { id: 1, title: "Ticket 1", description: "Description of Ticket 1" },
        { id: 2, title: "Ticket 2", description: "Description of Ticket 2" },
        { id: 3, title: "Ticket 3", description: "Description of Ticket 3" },
        // Add more ticket objects as needed
    ];

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchId(value);
        setLoading(true);

        setTimeout(() => {
            setShowTickets(value !== "");
            setLoading(false);
        }, 2000);
    };

    const filteredTickets = tickets.filter((ticket) =>
        ticket.id.toString().includes(searchId)
    );

    return (
        <>
            <div className="search-ticket-container">
                <p>Trace your Ticket</p>
                <input
                    type="text"
                    value={searchId}
                    onChange={handleSearch}
                    placeholder="Enter ticket ID"
                />
                {loading ? (
                    <BeatLoader color="blue" loading={loading} size={30} />
                ) : showTickets ? (
                    filteredTickets.length > 0 ? (
                        <div className="searched-data">
                            <ul>
                                {filteredTickets.map((ticket) => (
                                    <li key={ticket.id}>
                                        <h3>{ticket.title}</h3>
                                        <p>{ticket.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p>No tickets found.</p>
                    )
                ) : null}
            </div>
        </>
    );
};

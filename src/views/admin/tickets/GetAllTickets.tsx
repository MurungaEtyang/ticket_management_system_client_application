
import React, { useState, useEffect } from 'react';

import { BeatLoader } from "react-spinners";

const GetAllTickets = () => {
    const [tickets, setTickets] = useState<Array<{
        ticketNumber: number;
        title: string;
        description: string;
        priority: string;
        status: string;
        raisedBy: string;
        assignedTo: string;
        deadline: string;
    }>>([]);
    const [error, setError] = useState('');
    const [searchId, setSearchId] = useState('');
    const [searchedTicket, setSearchedTicket] = useState<{
        ticketNumber: number;
        title: string;
        description: string;
        priority: string;
        status: string;
        raisedBy: string;
        assignedTo: string;
        deadline: string;
    } | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // Simulating API call to fetch ticket data
        setTimeout(() => {
            const data = [
                {
                    ticketNumber: 1,
                    title: "Sample Ticket 1",
                    description: "This is a sample ticket 1",
                    priority: "High",
                    status: "OPEN",
                    raisedBy: "John Doe",
                    assignedTo: "Jane Smith",
                    deadline: "2022-12-31"
                },
                {
                    ticketNumber: 2,
                    title: "Sample Ticket 2",
                    description: "This is a sample ticket 2",
                    priority: "Medium",
                    status: "ASSIGNED",
                    raisedBy: "John Doe",
                    assignedTo: "Jane Smith",
                    deadline: "2022-12-31"
                },
                {
                    ticketNumber: 3,
                    title: "Sample Ticket 3",
                    description: "This is a sample ticket 3",
                    priority: "Low",
                    status: "SUBMITTED",
                    raisedBy: "John Doe",
                    assignedTo: "Jane Smith",
                    deadline: "2022-12-31"
                }
            ];
            setTickets(data);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <section className="depart">
            {error && <div className="error">{error}</div>}

            <form className="depart-card-tickets">
                <div className="depart-card-tickets-body">
                    <div className="depart-search-container">
                        <input
                            type="text"
                            placeholder="Enter Ticket ID"
                            value={searchId}
                            onChange={e => setSearchId(e.target.value)}
                        />
                        <button type="button" >Search</button>
                    </div>
                        <>
                            <section className="section-ticket">
                                {loading ? (
                                    <BeatLoader color={'blue'} size={50} />
                                ) : (
                                    tickets.length === 0 ? (
                                        <div className="depart-no-tickets">No tickets available.</div>
                                    ) : (
                                        <table className="depart-card-tickets-table">
                                            <thead>
                                            <tr>
                                                <th>Ticket Number</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Priority</th>
                                                <th>Status</th>
                                                <th>Raised By</th>
                                                <th>Assigned To</th>
                                                <th>Deadline</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {tickets.map(ticket => (
                                                <tr key={ticket.ticketNumber}>
                                                    <td>{ticket.ticketNumber}</td>
                                                    <td>{ticket.title}</td>
                                                    <td>{ticket.description}</td>
                                                    <td>{ticket.priority}</td>
                                                    <td>{ticket.status}</td>
                                                    <td>{ticket.raisedBy}</td>
                                                    <td>{ticket.assignedTo}</td>
                                                    <td>{ticket.deadline}</td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    )
                                )}
                            </section>
                        </>

                </div>
            </form>
        </section>
    );
};

export default GetAllTickets;
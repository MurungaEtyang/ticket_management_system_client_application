
import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { FaTimes } from 'react-icons/fa';
import AssignTicket from "../admin/tickets/AssignTicket";


const UserTickets = () => {
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
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [filteredTickets, setFilteredTickets] = useState<Array<{
        ticketNumber: number;
        title: string;
        description: string;
        priority: string;
        status: string;
        raisedBy: string;
        assignedTo: string;
        deadline: string;
    }>>([]);

    useEffect(() => {
        setLoading(true);
        // Simulating API call to fetch ticket data
        setTimeout(() => {
            const data = [
                {
                    ticketNumber: 1,
                    title: 'Sample Ticket 1',
                    description: 'This is a sample ticket 1',
                    priority: 'High',
                    status: 'OPEN',
                    raisedBy: 'John Doe',
                    assignedTo: 'Jane Smith',
                    deadline: '2022-12-31',
                },
                {
                    ticketNumber: 2,
                    title: 'Sample Ticket 2',
                    description: 'This is a sample ticket 2',
                    priority: 'High',
                    status: 'OPEN',
                    raisedBy: 'John Doe',
                    assignedTo: 'Jane Smith',
                    deadline: '2022-12-31',
                },
                {
                    ticketNumber: 3,
                    title: 'Sample Ticket 3',
                    description: 'This is a sample ticket 3',
                    priority: 'High',
                    status: 'OPEN',
                    raisedBy: 'John Doe',
                    assignedTo: 'Jane Smith',
                    deadline: '2022-12-31',
                },
                {
                    ticketNumber: 4,
                    title: 'Sample Ticket 4',
                    description: 'This is a sample ticket 4',
                    priority: 'High',
                    status: 'OPEN',
                    raisedBy: 'John Doe',
                    assignedTo: 'Jane Smith',
                    deadline: '2022-12-31',
                },
                {
                    ticketNumber: 5,
                    title: 'Sample Ticket 5',
                    description: 'This is a sample ticket 5',
                    priority: 'High',
                    status: 'OPEN',
                    raisedBy: 'John Doe',
                    assignedTo: 'Jane Smith',
                    deadline: '2022-12-31',
                },
                // Add more tickets here
            ];
            setTickets(data);
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        setFilteredTickets(
            tickets.filter((ticket) =>
                searchId !== '' ? ticket.ticketNumber === parseInt(searchId) : true
            )
        );
    }, [searchId, tickets]);

    function handleAssignTicket(ticketNumber: number) {
        setShowModal(!showModal);
    }

    function setSelectedTicketNumber(ticketNumber: number) {
        handleAssignTicket(ticketNumber);
    }

    function handleSearch() {
        // Declare searchedTicketId variable
        const searchedTicketId = searchId;
        setSearchId(searchedTicketId);
    }

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
                            onChange={(e) => setSearchId(e.target.value)}
                        />
                        <button type="button" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                    <>
                        <section className="section-ticket">
                            {loading ? (
                                <BeatLoader color={'blue'} size={50} />
                            ) : filteredTickets.length === 0 ? (
                                <div className="depart-no-tickets">There are no tickets related to the provided search ID {searchId}.</div>
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
                                    {filteredTickets.map((ticket) => (
                                        <tr key={ticket.ticketNumber}>
                                            <td>
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedTicketNumber(ticket.ticketNumber)}
                                                >
                                                    {ticket.ticketNumber}
                                                </button>
                                            </td>
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
                            )}
                        </section>
                    </>
                </div>
            </form>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close-button" onClick={() => setShowModal(false)}>
                            <FaTimes />
                        </button>
                        <AssignTicket />
                    </div>
                </div>
            )}
        </section>
    );
};

export default UserTickets;

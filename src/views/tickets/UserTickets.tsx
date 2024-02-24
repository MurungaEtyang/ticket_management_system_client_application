
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
                    description: 'This is a sample ticket 1 kjhdcgshcdb sfhjdvgjb vjhdjvhjbd cjdvjdjv',
                    priority: 'High',
                    status: 'OPEN',
                    raisedBy: 'John Doe',
                    assignedTo: 'Jane Smith',
                    deadline: '2022-12-31',
                },

                {
                    ticketNumber: 2,
                    title: 'Sample Ticket 1',
                    description: 'This is a sample ticket 1',
                    priority: 'High',
                    status: 'OPEN',
                    raisedBy: 'John Doe',
                    assignedTo: 'Jane Smith',
                    deadline: '2022-12-31',
                },
                {
                    ticketNumber: 3,
                    title: 'Sample Ticket 1',
                    description: 'This is a sample ticket 1',
                    priority: 'High',
                    status: 'OPEN',
                    raisedBy: 'John Doe',
                    assignedTo: 'Jane Smith',
                    deadline: '2022-12-31',
                }

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
                    </div>
                    <>
                        <section className="section-ticket">
                            {loading ? (
                                <BeatLoader color={"blue"} size={50} />
                            ) : filteredTickets.length === 0 ? (
                                <div className="depart-no-tickets">
                                    There are no tickets related to the provided search ID {searchId}.
                                </div>
                            ) : (
                                <div className="dashboard-card-tickets-table">
                                    {filteredTickets.map((ticket) => (
                                        <div className="ticket-row" key={ticket.ticketNumber}>
                                            <div className="ticket-info">
                                                <h3 className="ticket-label">Ticket Number:</h3>
                                                <button className="ticket-value-button">{ticket.ticketNumber}</button>
                                            </div>
                                            <div className="ticket-info">
                                                <h3 className="ticket-label">Title:</h3>
                                                <p className="ticket-value">{ticket.title}</p>
                                            </div>
                                            <div className="ticket-info">
                                                <h3 className="ticket-label">Description:</h3>
                                                <p className="ticket-value">{ticket.description}</p>
                                            </div>
                                            <div className="ticket-info">
                                                <h3 className="ticket-label">Priority:</h3>
                                                <p className="ticket-value">{ticket.priority}</p>
                                            </div>
                                            <div className="ticket-info">
                                                <h3 className="ticket-label">Status:</h3>
                                                <p className="ticket-value">{ticket.status}</p>
                                            </div>
                                            <div className="ticket-info">
                                                <h3 className="ticket-label">Raised By:</h3>
                                                <p className="ticket-value">{ticket.raisedBy}</p>
                                            </div>
                                            <div className="ticket-info">
                                                <h3 className="ticket-label">Assigned To:</h3>
                                                <p className="ticket-value">{ticket.assignedTo}</p>
                                            </div>
                                            <div className="ticket-info">
                                                <h3 className="ticket-label">Deadline:</h3>
                                                <p className="ticket-value">{ticket.deadline}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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

import React, { useState, useEffect } from 'react';
// @ts-ignore
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// @ts-ignore
import { BeatLoader } from 'react-spinners';
// @ts-ignore
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";

const AssignTicket = () => {
    const [isLoading, setIsLoading] = useState(false);
    const ticketNumber = localStorage.getItem('ticket_number');
    const ticketId = ticketNumber !== null ? parseInt(ticketNumber) : 0;
    const [assignTo, setAssignTo] = useState('');
    const [priority, setPriority] = useState('');
    const [deadline, setDeadline] = useState('');
    const [assignToOptions, setAssignToOptions] = useState<string[]>([]);

    useEffect(() => {
        // Fetch the Assign To options from the API endpoint
        const fetchAssignToOptions = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/v1/users/management/authority?authority=employee', {
                    method: "GET",
                    headers: {
                        Authorization: 'Basic ' + localStorage.getItem('email_password_credentials')
                    }
                });
                const data = await response.json();
                const userNames = data.map((user: any) => user.username); // Specify the type of 'user' parameter
                setAssignToOptions(userNames);

            } catch (error) {
                console.error('Error fetching Assign To options:', error);
            }
        };

        fetchAssignToOptions()
    }, []);

    const handleDeadlineChange = (date: Date | null) => {
        setDeadline(moment(date).format('DD/MM/YYYY'));
        // alert(moment(date).format('MM/DD/YYYY'))
    };

    const handleAssignToChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAssignTo(event.target.value);
    };


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

            await fetch('http://localhost:8080/api/v1/tickets/assign?' +
                'ticket_number=' + encodeURIComponent(ticketId) +
                '&to=' + assignTo +
                '&priority=' + priority +
                '&deadline=' + encodeURIComponent(deadline), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic ' + localStorage.getItem('email_password_credentials')
                },
                body: JSON.stringify({
                    'ticketId': encodeURIComponent(ticketId),
                    'assignTo': assignTo,
                    'priority': priority,
                    'deadline': encodeURIComponent(deadline)

                })
            }).then(response => {
                if (response.ok) {
                    // console.log('Ticket assigned successfully');
                    toast.success('Ticket assigned successfully', {

                    });

                } else {
                    toast.error('Error assigning ticket.', {

                    });

                }
                setIsLoading(false);
            }).catch(() =>{
                toast.error('Error fetching ticket content', {

                });
            }).finally(() => {
                setAssignTo('');
                setPriority('');

            });
        setIsLoading(false);
    };

    return (
        <div className="assign-ticket-container">

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="assignTo">Assign To:</label>
                        <select
                            id="assignTo"
                            value={assignTo}
                            onChange={handleAssignToChange}
                        >
                            <option value="">Select an Employee</option>
                            {assignToOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="priority">Priority</label>
                        <select
                            className="form-control"
                            id="priority"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="">Select Priority</option>
                            <option value="LOW">LOW</option>
                            <option value="MEDIUM">MEDIUM</option>
                            <option value="HIGH">HIGH</option>
                        </select>
                    </div>
                    <div>

                        <div className="form-group">
                            <label htmlFor="deadline">Deadline:</label>
                            <DatePicker
                                className={`datepicker`}
                                id="deadline"
                                value={deadline}
                                onChange={handleDeadlineChange}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select a date"
                            />
                        </div>
                    </div>
                    <div className={`assign-button-1`}>
                        {isLoading ? (
                            <BeatLoader color="#000000" size={30}/>
                        ) : (
                            <>
                                <button onClick={handleSubmit } type="submit" className="assign-ticket-button">
                                    Assign Ticket
                                </button>
                            </>
                        )}
                    </div>
                </form>
            <ToastContainer/>
        </div>
    );
}
export default AssignTicket;
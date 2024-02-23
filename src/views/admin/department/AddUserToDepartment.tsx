import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import Select, { GroupBase } from 'react-select';
import ValueType from 'react-select';

interface DepartmentOption {
    value: string;
    label: string;
}

const AddUserToDepartment = () => {
    const [email, setEmail] = useState<string[]>([]);
    const [department, setDepartment] = useState<DepartmentOption[]>([]);
    const [loading, setLoading] = useState(false);
    const [departments, setDepartments] = useState<DepartmentOption[]>([]);
    const [emails, setEmails] = useState<string[]>([]);
    const [selectedEmail, setSelectedEmail] = useState<DepartmentOption | null>(null);


    useEffect(() => {
        fetchDepartments();
        fetchEmails();
    }, []);

    const fetchDepartments = async () => {
        // Implement the logic to fetch departments
    };

    const fetchEmails = async () => {
        // Implement the logic to fetch emails
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            // Implement the logic to submit the form
            setLoading(false);
        } catch (error) {
            toast.error('Failed to add user to department. Please try again.');
        }
    };

    const override = css`
    display: block;
    margin: 0 auto;
  `;

    return (
        <div className="container1">
            <div className="register-user">
                <h3 className="card-title">Add Users To Department</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group-create">
                        <label htmlFor="email">Email *</label>
                        <Select

                            required
                            options={emails.map((email) => ({ value: email, label: email }))}
                            value={selectedEmail}
                            onChange={(selectedOption) => setSelectedEmail(selectedOption)}
                            isSearchable
                        />
                    </div>
                    <div className="form-group-create">
                        <label htmlFor="department">Department *</label>
                        <Select

                            required
                            options={emails.map((email) => ({ value: email, label: email }))}
                            value={selectedEmail}
                            onChange={(selectedOption) => setSelectedEmail(selectedOption)}
                            isSearchable
                        />
                    </div>
                    <div className={`form-group-create`}>
                        <button type="submit" className="create-add-button" disabled={loading}>
                            {loading ? (
                                <ClipLoader color="#ffffff" loading={loading} size={20} />
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddUserToDepartment;
export const ToastNotificationAddUserToDepartment = () => {
    return <ToastContainer />;
};

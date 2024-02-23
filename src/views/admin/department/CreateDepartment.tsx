import React, { useState, useEffect } from 'react';
// @ts-ignore
import { toast, ToastContainer } from 'react-toastify';
// @ts-ignore
import 'react-toastify/dist/ReactToastify.css';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import Select from 'react-select';

const CreateDepartment = () => {
    const [nameOfDepartment, setNameOfDepartment] = useState('');
    const [emailOfDepartment, setEmailOfDepartment] = useState('');
    const [headOfDepartment, setHeadOfDepartment] = useState<{ label: string; value: string; } | null>(null);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<{ name: string; }[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/v1/users/management/authority?authority=employee',{
                    method: "GET",
                    headers: {
                        Authorization: 'Basic ' + localStorage.getItem('email_password_credentials')
                    }
                });
                const data = await response.json();
                const userNames = data.map((user: { username: any; }) => user.username);
                setUsers(userNames.map((name: any) => ({ name })));
                // alert(userNames)

            } catch (error) {
                console.error('Error fetching users:', error);
                console.log(error);
            }
        };

        fetchUsers();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();



            setLoading(true);


    };

    const override = css`
        display: block;
        margin: 0 auto;
    `;

    const userOptions = users.map((user) => ({
        // value: user.id,
        label: user.name,
    }));

    return (
        <div className="container1">
            <div className="register-user">
                <h3 className="card-title">Create Department</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group-create">
                        <label htmlFor="nameOfDepart">Name of Department *</label>
                        <input
                            type="text"
                            id="department"
                            value={nameOfDepartment}
                            onChange={(e) => setNameOfDepartment(e.target.value)}
                        />
                    </div>
                    <div className="form-group-create">
                        <label htmlFor="nameOfDepart">Email of Department *</label>
                        <input
                            type="text"
                            className="form-control"
                            id="department"
                            value={emailOfDepartment}
                            onChange={(e) => setEmailOfDepartment(e.target.value)}
                        />
                    </div>
                    <div className="form-group-create">
                        <label htmlFor="HeadOfDepart">Head of Department *</label>
                        <Select
                            options={userOptions}
                            isSearchable
                            placeholder="Search for users..."
                            onChange={(selectedOption) => setHeadOfDepartment(selectedOption ? { label: selectedOption.label, value: selectedOption.label } : null)}
                        />
                    </div>

                    <div className={`form-group-create`}>
                        <button type="submit" className="create-dept-button" disabled={loading}>
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

export default CreateDepartment;
export const ToastNotificationLogin = () => {
    return <ToastContainer />;
};
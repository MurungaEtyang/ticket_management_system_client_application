import React, { useEffect, useState } from 'react';
// @ts-ignore
import Select from 'react-select';
// @ts-ignore
import ClipLoader from 'react-spinners/ClipLoader';
// import ApiServices from "../../handleApi/ApiServices.ts";

const ElevateUser = () => {
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState<{ value: string; label: string } | null>(null);
    const [roles, setRoles] = useState<{ value: string; label: string }[]>([]);
    const [user, setUser] = useState<{ value: string; label: string } | null>(null);
    const [users, setUsers] = useState<{ value: string; label: string }[]>([]);
    // const apiServices = new ApiServices();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            // await apiServices.elevateUserRole(user?.label || '', role?.label || '');
            // Mocking the API call with a timeout
            setTimeout(() => {
                console.log(`User ${user?.label} promoted to role ${role?.label} successfully!`);
                setLoading(false);
            }, 1000);
        } catch (err) {
            console.error('Error:', err);
            setLoading(false);
        }
    };

    useEffect(() => {
        // Mocking the API call to fetch roles
        const fetchRoles = async () => {
            setLoading(true);
            // try {
            //     const roles = await apiServices.allUsers();
            //     if (roles.success) {
            //         const roles1 = roles.data.map((role) => ({ value: role.authorities, label: role.authorities }));
            //         setRoles(roles1);
            //     } else {
            //         console.error('Failed to fetch roles. Please try again.');
            //     }
            // } catch (error) {
            //     console.error('Failed to fetch roles. Please try again.', error);
            // }
            setTimeout(() => {
                const mockRoles = ['Admin', 'Manager', 'Employee'].map((role) => ({
                    value: role,
                    label: role,
                }));
                setRoles(mockRoles);
                setLoading(false);
            }, 1000);
        };

        // Mocking the API call to fetch users
        const fetchUsers = async () => {
            setLoading(true);
            // try {
            //     const result = await apiServices.allUsers();
            //     if (result.success) {
            //         const users = result.data.map((user) => ({ value: user.username, label: user.username }));
            //         setUsers(users);
            //     }
            // } catch (error) {
            //     console.error('Failed to fetch users. Please try again.', error);
            // }
            setTimeout(() => {
                const mockUsers = ['User1', 'User2', 'User3'].map((user) => ({
                    value: user,
                    label: user,
                }));
                setUsers(mockUsers);
                setLoading(false);
            }, 1000);
        };

        fetchRoles();
        fetchUsers();
    }, []);

    return (
        <>
            <div className="container-elevate">
                <div className="create-dept-card-body">
                    <h3 className="card-title">PROMOTE USERS</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group-create">
                            <label htmlFor="roles">ROLES *</label>
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                <Select
                                    className={`select`}
                                    required
                                    options={roles}
                                    value={role}
                                    onChange={(selectedOption: React.SetStateAction<{ value: string; label: string; } | null>) => setRole(selectedOption)}
                                    isSearchable
                                />
                            )}

                            <label htmlFor="users">USER *</label>
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                <Select
                                    className={`select`}
                                    required
                                    options={users}
                                    value={user}
                                    onChange={(selectedOption: React.SetStateAction<{ value: string; label: string; } | null>) => setUser(selectedOption)}
                                    isSearchable
                                />
                            )}
                        </div>
                        <div className={`form-group-create`}>
                            <button type="submit" className="create-elevate-button" disabled={loading}>
                                {loading ? (
                                    <ClipLoader color="#ffffff" loading={loading} size={20} />
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ElevateUser;

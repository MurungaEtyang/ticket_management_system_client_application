
import React, { useEffect, useState } from "react";

interface User {
    username: string;
    authorities: string[];
    rating: number;
}

const AllUser = () => {
    const [users, setUsers] = useState<User[]>([
        { username: "John", authorities: ["OWNER"], rating: 4.5 },
        { username: "Jane", authorities: ["ADMIN"], rating: 4.2 },
        { username: "Mike", authorities: ["DEPARTMENT_ADMIN"], rating: 3.8 },
        { username: "Emily", authorities: ["EMPLOYEE"], rating: 4.0 },
        { username: "David", authorities: ["USER"], rating: 3.5 },
        { username: "Jane", authorities: ["ADMIN"], rating: 4.2 },
        { username: "Mike", authorities: ["DEPARTMENT_ADMIN"], rating: 3.8 },
        { username: "Emily", authorities: ["EMPLOYEE"], rating: 4.0 },
        { username: "David", authorities: ["USER"], rating: 3.5 },
        { username: "Jane", authorities: ["ADMIN"], rating: 4.2 },
        { username: "Mike", authorities: ["DEPARTMENT_ADMIN"], rating: 3.8 },
        { username: "Emily", authorities: ["EMPLOYEE"], rating: 4.0 },
        { username: "David", authorities: ["USER"], rating: 3.5 },
        { username: "Jane", authorities: ["ADMIN"], rating: 4.2 },
        { username: "Mike", authorities: ["DEPARTMENT_ADMIN"], rating: 3.8 },
        { username: "Emily", authorities: ["EMPLOYEE"], rating: 4.0 },
        { username: "David", authorities: ["USER"], rating: 3.5 },
    ]);
    const [error, setError] = useState("");
    const [searchUsername, setSearchUsername] = useState("");
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    const handleSearch = () => {
        const filtered = users.filter((user) =>
            user.username.toLowerCase().includes(searchUsername.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    useEffect(() => {
        handleSearch();
    }, [searchUsername]);

    return (
        <section className="all-users">
            {error && <div className="error">{error}</div>}

            <form className="card-users">
                <div className="card-users-body">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search username"
                            value={searchUsername}
                            onChange={(e) => setSearchUsername(e.target.value)}
                        />
                        <button type="button" onClick={handleSearch}>
                            Search
                        </button>
                    </div>

                    <section className="Department-section-ticket">
                        {filteredUsers.length === 0 ? (
                            <label className="depart-no-tickets">No tickets available.</label>
                        ) : (
                            <table className="depart-card-tickets-table">
                                <thead>
                                <tr>
                                    <th>USERNAME</th>
                                    <th>AUTHORITIES</th>
                                    <th>RATING</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user.username}>
                                        <td>{user.username}</td>
                                        <td>{user.authorities.join(", ")}</td>
                                        <td>{user.rating}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )}
                    </section>
                </div>
            </form>
        </section>
    );
};

export default AllUser;

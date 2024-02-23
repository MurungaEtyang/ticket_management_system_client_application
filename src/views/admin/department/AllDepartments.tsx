
import React, { useEffect, useState } from "react";

interface Department {
    department: string;
    rating: number;
}

const AllDepartments = () => {
    const [departments, setDepartments] = useState<Department[]>([
        { department: "Department1",  rating: 4.5 },
        { department: "Department2",  rating: 4.2 },
        { department: "Department3",  rating: 3.8 },
        { department: "Department4",  rating: 4.0 },
        { department: "Department5",  rating: 3.5 },
        { department: "Department6",  rating: 4.2 },

    ]);
    const [error, setError] = useState("");
    const [searchDepartment, setSearchDepartment] = useState("");
    const [filteredDepartment, setFilteredDepartment] = useState<Department[]>([]);

    const handleSearch = () => {
        const filtered = departments.filter((department) =>
            department.department.toLowerCase().includes(searchDepartment.toLowerCase())
        );
        setFilteredDepartment(filtered);
    };

    useEffect(() => {
        handleSearch();
    }, [searchDepartment, departments]);

    return (
        <section className="all-users">
            {error && <div className="error">{error}</div>}

            <form className="card-users">
                <div className="card-users-body">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search username"
                            value={searchDepartment}
                            onChange={(e) => setSearchDepartment(e.target.value)}
                        />
                        <button type="button" onClick={handleSearch}>
                            Search
                        </button>
                    </div>

                    <section className="Department-section-ticket">
                        {filteredDepartment.length === 0 ? (
                            <label className="depart-no-tickets">There are no user related to the provided username: {searchDepartment}</label>
                        ) : (
                            <table className="depart-card-tickets-table">
                                <thead>
                                <tr>
                                    <th>Department</th>
                                    <th>RATING</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredDepartment.map((user) => (
                                    <tr key={user.department}>
                                        <td>{user.department}</td>
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

export default AllDepartments;

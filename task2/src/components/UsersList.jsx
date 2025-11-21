import { useState } from "react";
import usersData from "./usersData.js";
import UserCard from "./UserCard.jsx";

export default function UsersList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(usersData);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    e?.preventDefault();

    const term = searchTerm.trim().toLowerCase();
    if (!term) return;

    const result = usersData.filter((user) =>
      user.email.toLowerCase().includes(term)
    );

    setFilteredUsers(result);
    setIsSearching(true);
  };

  const handleReset = () => {
    setFilteredUsers(usersData);
    setSearchTerm("");
    setIsSearching(false);
  };

  return (
    <div className="users-wrapper">
      <h2 className="mb-3">Users</h2>

      {/* Search bar */}
      <form className="d-flex gap-2 mb-4" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="Search by email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-teal">
          Search
        </button>
        {isSearching && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </form>

      {/* Users cards */}
      <div className="row">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p className="text-muted">No users found.</p>
        )}
      </div>
    </div>
  );
}

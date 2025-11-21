export default function UserCard({ user }) {
  const { username, email, phone, birthdate, role, avatar } = user;

  const getRoleClass = () => {
    const r = role.toLowerCase();
    if (r === "admin") return "bg-danger text-white";
    if (r === "user") return "bg-success text-white";
    if (r === "moderator") return "bg-warning text-dark";
    return "bg-secondary text-white";
  };

  return (
    <div className="col-md-6 col-lg-4 mb-3">
      <div className="card user-card h-100 shadow-sm">
        <div className="card-body text-center">
          <div className="user-avatar mx-auto mb-3">
            <img src={avatar} alt={username} />
          </div>

          <span className={`badge role-chip mb-2 ${getRoleClass()}`}>
            {role}
          </span>

          <h5 className="card-title mb-1">{username}</h5>
          <p className="card-text small mb-1">{email}</p>
          <p className="card-text small mb-1">{phone}</p>
          <p className="card-text small text-muted mb-0">Birthdate: {birthdate}</p>
        </div>
      </div>
    </div>
  );
}

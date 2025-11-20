
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "../../css/pages/forAdmin/UsersPage.css";

export default function UsersPage() {
  const { users } = useContext(UserContext);

  return (
    <div className="users-container">
      <h1 className="users-title">All Users</h1>

      <div className="users-grid">
        {users.length === 0 && <p>No users</p>}

              {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

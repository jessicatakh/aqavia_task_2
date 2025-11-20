import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "../../css/pages/forAuth/Register.css";

export default function Register() {
  const { users, addUser, updateCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [error, setError] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError(""); 
  };

  const checkPassword = (pass) => {
    if (pass.length < 8) return "Password must be at least 8 characters long.";
    if (!/[A-Z]/.test(pass)) return "Password needs at least one uppercase letter.";
    if (!/[a-z]/.test(pass)) return "Password needs at least one lowercase letter.";
    if (!/[0-9]/.test(pass)) return "Password must contain numbers.";
    if (!/[!@#$%^&*]/.test(pass)) return "Password must include a special symbol.";
    return null;
  };

  const createToken = () => crypto.randomUUID();

  const onSubmit = (event) => {
    event.preventDefault();

    // Email should not be duplicated
    const exists = users.some((u) => u.email === form.email);
    if (exists) {
      setError("This email is already registered.");
      return;
    }

    // Password validation
    const pwdMessage = checkPassword(form.password);
    if (pwdMessage) {
      setError(pwdMessage);
      return;
    }

    // Create and save user
    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      password: form.password,
      role: form.role,
      token: createToken(),
    };

    addUser(newUser);
    updateCurrentUser(newUser);

    // Redirect target
    navigate(newUser.role === "admin" ? "/admin" : "/user");
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Create Account</h2>

      {error && <p className="error-msg">{error}</p>}

      <form className="register-form" onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={form.name}
          onChange={onChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={onChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Choose a password"
          value={form.password}
          onChange={onChange}
          required
        />

        <label>User Role</label>
        <select
          name="role"
          className="role-select"
          value={form.role}
          onChange={onChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button className="register-btn" type="submit">
          Create User
        </button>
      </form>
    </div>
  );
}

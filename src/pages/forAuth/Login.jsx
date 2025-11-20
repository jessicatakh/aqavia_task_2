import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "../../css/pages/forAuth/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const loggedUser = login(formData.email, formData.password);

    if (!loggedUser) {
      setError("Email or password is incorrect.");
      return;
    }

    // Navigate based on role
    if (loggedUser.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      {error && <p className="login-error">{error}</p>}

      <form className="login-form" onSubmit={onSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={onChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={onChange}
          required
        />

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>

      <p className="login-footer">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}

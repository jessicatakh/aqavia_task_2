// src/components/Navbar.jsx
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../css/method/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  const goHome = () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    if (currentUser.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left"></div>

      <div className="navbar-right">
        <button className="navbar-btn" onClick={goHome}>
          Home
        </button>

        <button className="navbar-btn" onClick={goBack}>
          Back
        </button>
      </div>
    </nav>
  );
}

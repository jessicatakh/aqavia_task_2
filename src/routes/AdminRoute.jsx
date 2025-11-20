import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function AdminRoute({ children }) {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/admin" />;
  }

  if (currentUser.role !== "admin") {
    return <Navigate to="/user" />;
  }

  return children;
}

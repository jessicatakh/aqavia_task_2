import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function UserRoute({ children }) {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/user" />;
  }

  if (currentUser.role !== "user") {
    return <Navigate to="/admin" />;
  }

  return children;
}

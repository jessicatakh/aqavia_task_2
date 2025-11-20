
import { Outlet } from "react-router-dom";


import "./../css/layout/AuthLayout.css";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-card">
        <Outlet />
      </div>
    </div>
  );
}

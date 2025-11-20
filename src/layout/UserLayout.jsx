
import { Outlet } from "react-router-dom";
import Navbar from "../method/Navbar";


import "././../css/layout/UserLayout.css";

export default function UserLayout() {
  return (
            <div className="user-layout">
      <Navbar />
      <main className="user-content">
        <Outlet />
      </main>
    </div>
  );
}

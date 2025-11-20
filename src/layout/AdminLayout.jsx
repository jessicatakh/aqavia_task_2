
import { Outlet } from "react-router-dom";
import Navbar from "../method/Navbar";


import Sidebar from "../method/Sidebar";
import "../css/layout/AdminLayout.css";

export default function AdminLayout() {
  return (
                 <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
             <Navbar />
        <main className="admin-content">
          <Outlet />
           </main>
      </div>
    </div>
  );
}

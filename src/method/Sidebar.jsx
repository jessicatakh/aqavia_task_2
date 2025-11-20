
import { Link } from "react-router-dom";
import "../css/method/Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">sidebar
      </div>

      <nav className="sidebar-nav">
             <Link to="/admin" className="sidebar-link">
          
        </Link>
        <Link to="/admin/users" className="sidebar-link">
               Users
        </Link>



      </nav>
    </aside>
  );
}

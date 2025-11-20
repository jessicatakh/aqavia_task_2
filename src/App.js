import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import UserLayout from "./layout/UserLayout";
import AdminLayout from "./layout/AdminLayout";
import Login from "./pages/forAuth/Login";
import Register from "./pages/forAuth/Register";
import UserHome from "./pages/forUser/UserHome";
import AdminHome from "./pages/forAdmin/AdminHome";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";
import UsersPage from "./pages/forAdmin/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Route>

        <Route
          path="/user"
          element={
            <UserRoute>
              <UserLayout />
            </UserRoute>
          }
        >
          <Route index element={<UserHome />} />
        </Route>


        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminHome />} />
          
        </Route>
                <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={< UsersPage />} />
        </Route>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;

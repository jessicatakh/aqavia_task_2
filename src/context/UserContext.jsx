import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) setUsers(JSON.parse(storedUsers));

    const storedCurrent = localStorage.getItem("currentUser");
    if (storedCurrent) setCurrentUser(JSON.parse(storedCurrent));
  }, []);

const updateCurrentUser = (user) => {
  setCurrentUser(user);
};

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);


  useEffect(() => {
    if (currentUser)
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    else localStorage.removeItem("currentUser");
  }, [currentUser]);

  const addUser = (userData) => {
    setUsers([...users, userData]);
  };

  const login = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) return null;

    setCurrentUser(foundUser);
    return foundUser; 
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider
      value={{ users, addUser, login, logout, currentUser,updateCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

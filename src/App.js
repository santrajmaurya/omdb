import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { useUserContext } from "./context";

const App = () => {
  const { setUserKey } = useUserContext();
  useEffect(() => {
    const userApiKey = localStorage.getItem("userCred");
    if (userApiKey) {
      setUserKey(userApiKey);
    }
  }, [setUserKey]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path=":id/details" element={<Details />} />
        <Route path="login" element={<Login />} />
        <Route path="add-movie" element={<AddMovie />} />
      </Routes>
    </>
  );
};

export default App;

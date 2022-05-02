import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import AddMovie from "./components/AddMovie";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./ProtectedRute";
import PageNotFound from "./components/PageNotFound";
import { useUserContext } from "./context";

const App = () => {
  const { setUserKey, userKey } = useUserContext();
  useEffect(() => {
    const userApiKey = localStorage.getItem("userCred");
    if (userApiKey) {
      setUserKey(userApiKey);
    }
  }, [setUserKey]);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route exact path="omdb" element={<Login />} />
        <Route exact path="login" element={<Login />} />
        <Route element={<ProtectedRoute userKey={userKey} />}>
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route path=":id/details" element={<Details />} />
          <Route exact path="add-movie" element={<AddMovie />} />
        </Route>
        <Route path="*" element={<PageNotFound userKey={userKey} />} />
      </Routes>
    </>
  );
};

export default App;

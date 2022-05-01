import React, { useEffect } from "react";
import { CssBaseline } from "@mui/material";

import Movies from "./Movies";
import SearchMovie from "./SearchMovie";

import { useUserContext } from "../context";

const Dashboard = () => {
  const { fetchMovies, userKey } = useUserContext();

  useEffect(() => {
    if (userKey) {
      fetchMovies(userKey);
    }
  }, [fetchMovies, userKey]);

  return (
    <>
      <CssBaseline />
      <SearchMovie />
      <Movies />
    </>
  );
};

export default Dashboard;

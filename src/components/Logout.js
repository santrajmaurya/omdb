import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Toolbar } from "@mui/material";

import { useUserContext } from "../context";

export default function Logout() {
  const navigate = useNavigate();
  const { setUserKey } = useUserContext();

  const handleLogout = () => {
    localStorage.removeItem("userCred");
    setUserKey("");
    navigate("/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Button onClick={handleLogout} color="error" variant="contained">
          Logout
        </Button>
      </Toolbar>
    </Box>
  );
}

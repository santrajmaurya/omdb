import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";

import { useUserContext } from "../context";
import Logout from "./Logout";

const NavBar = () => {
  const { userKey } = useUserContext();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            OMDB
          </Typography>
          {userKey && (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <Menu
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem key="dashboard">
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/dashboard"
                      >
                        Dashboard
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem key="add-movie">
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/add-movie"
                      >
                        AddMovie
                      </Link>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  key="dashboard"
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </Button>
                <Button
                  key="add-movie"
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                    to="/add-movie"
                  >
                    AddMovie
                  </Link>
                </Button>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Logout />
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

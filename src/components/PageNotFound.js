import React from "react";
import { Link } from "react-router-dom";

import { Typography, Grid } from "@mui/material";
import pageNotFound from "../assets/page-not-found.jpeg";

export default function PageNotFound({ userKey }) {
  return (
    <Grid
      style={{
        justifyContent: "center",
      }}
      container
    >
      <Grid item xs={12} sm={6}>
        <img
          style={{ height: 850, width: "100%" }}
          src={pageNotFound}
          alt="This page could not be found"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography gutterBottom variant="h4" component="div">
          {!userKey && <Link to="/login">Back to Login</Link>}
        </Typography>
      </Grid>
    </Grid>
  );
}

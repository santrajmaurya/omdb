import React from "react";
import { Grid, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import { useUserContext } from "../context";
import Movie from "./Movie";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Movies = () => {
  const {
    moviesData,
    noMovieFoundAlert,
    setNoMovieFoundAlert,
    noMovieFoundAlertContent,
  } = useUserContext();

  return (
    <Grid
      style={{
        display: "flex",
        alignItems: "center",
        padding: 4,
        justifyContent: "center",
      }}
      container
      alignContent="stretch"
      spacing={3}
    >
      <Snackbar
        open={noMovieFoundAlert}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setNoMovieFoundAlert(false)}
      >
        <Alert severity="warning" sx={{ width: "100%" }}>
          {noMovieFoundAlertContent}
        </Alert>
      </Snackbar>
      {moviesData?.map((movie) => (
        <Grid key={Math.random()} item xs={6} sm={2}>
          <Movie movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Movies;

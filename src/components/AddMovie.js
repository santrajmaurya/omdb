import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";

import ShowMovie from "./ShowMovie";
import { useUserContext } from "../context";

const theme = createTheme();

export default function AddMovie() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [addedMovie, setAddedMovie] = useState({});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setMoviesData((oldArray) => [...oldArray, data]);
    setAddedMovie(data);
    setOpenModal(true);
  };

  const { setMoviesData } = useUserContext();
  const closeModal = () => {
    setOpenModal(false);
    navigate("/dashboard");
  };

  return (
    <ThemeProvider theme={theme}>
      {openModal && (
        <ShowMovie
          openModal={openModal}
          addedMovie={addedMovie}
          closeModal={closeModal}
        />
      )}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add a Movie
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Controller
                  control={control}
                  rules={{
                    maxLength: 50,
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField required fullWidth label="Title" {...field} />
                  )}
                  name="title"
                />
                {errors.title && (
                  <p style={{ color: "red" }}>This field is required.</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  rules={{
                    max: 2022,
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField required fullWidth label="Year" {...field} />
                  )}
                  name="year"
                />
                {errors.year && (
                  <p style={{ color: "red" }}>
                    This is mandatory field and future year can't be accepted.
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  rules={{
                    maxLength: 100,
                    required: true,
                    validate: (value) => value.split(",").length < 4,
                  }}
                  render={({ field }) => (
                    <TextField required fullWidth label="Genre" {...field} />
                  )}
                  name="genre"
                />
                {errors.genre && (
                  <p style={{ color: "red" }}>
                    This is mandatory field and only minimum 1 and maximum 3
                    three genre accept.
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  rules={{
                    maxLength: 100,
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField required fullWidth label="Language" {...field} />
                  )}
                  name="language"
                />
                {errors.language && (
                  <p style={{ color: "red" }}>
                    This is mandatory field and can accept atleast 1 Language.
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  rules={{
                    // minLength: 100,
                    minLength: 5,
                    maxLength: 500,
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField required fullWidth label="Plot" {...field} />
                  )}
                  name="plot"
                />
                {errors.plot && (
                  <p style={{ color: "red" }}>This field is required.</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    validate: (value) => {
                      try {
                        return Boolean(new URL(value));
                      } catch (e) {
                        return false;
                      }
                    },
                  }}
                  render={({ field }) => (
                    <TextField required fullWidth label="Website" {...field} />
                  )}
                  name="website"
                />
                {errors.website && (
                  <p style={{ color: "red" }}>
                    This is mandatory field and can't accept invalid website
                    URL.
                  </p>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

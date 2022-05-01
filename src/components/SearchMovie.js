import React, { useRef } from "react";
import {
  Paper,
  Box,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
} from "@mui/material";
import { useUserContext } from "../context";

export default function SearchMovie() {
  const [plotValue, setPlotValue] = React.useState("short");
  const { userKey, searchMovie, fetchMovies } = useUserContext();
  const titleInput = useRef(null);
  const yearInput = useRef(null);
  const plotInput = useRef(null);

  const handleChange = (event) => {
    setPlotValue(event.target.value);
  };

  const onSearchMovie = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const searchQuery = {
      title: data.get("title"),
      year: data.get("year"),
      plot: data.get("plot"),
    };
    searchMovie(searchQuery, userKey);
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      onSearchMovie();
    }
  };

  const onHandleReset = () => {
    titleInput.current.value = "";
    yearInput.current.value = "";
    plotInput.current.value = "";
    fetchMovies(userKey);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 3, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      textAlign="center"
      onSubmit={onSearchMovie}
      onKeyDown={onKeyDownHandler}
    >
      <Paper sx={{ margin: 1, bgcolor: "lightGrey" }}>
        <TextField
          name="title"
          id="title"
          label="Title"
          size="small"
          inputRef={titleInput}
        />
        <TextField
          name="year"
          id="year"
          label="Year"
          size="small"
          inputRef={yearInput}
        />
        <FormControl sx={{ m: 3, minWidth: 120 }} size="small">
          <InputLabel id="plot">Plot</InputLabel>
          <Select
            id="plot"
            label="Plot"
            name="plot"
            value={plotValue}
            inputRef={plotInput}
            onChange={handleChange}
          >
            <MenuItem value="full">Full</MenuItem>
            <MenuItem value="short">Short</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, mr: 2 }}
          size="large"
        >
          Search
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="large"
          // type="submit"
          onClick={() => onHandleReset()}
        >
          Reset
        </Button>
      </Paper>
    </Box>
  );
}

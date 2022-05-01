import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  Chip,
  Stack,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

import { useUserContext } from "../context";

const Movie = ({ movie }) => {
  const { userKey, fetchMovieDetails } = useUserContext();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
      }}
    >
      <CardActionArea
        id={movie.imdbID}
        onClick={() => fetchMovieDetails(movie.imdbID, userKey)}
      >
        <CardMedia>
          <img
            alt="green iguana"
            src={movie.Poster}
            style={{ height: 250, width: "100%" }}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h6">{movie.Title}</Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={1}>
            <Chip label={movie.Type} color="success" />
            <Chip label={movie.Year} color="success" variant="outlined" />
          </Stack>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Movie;

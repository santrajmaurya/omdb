import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import { useUserContext } from "../context";

export default function Details() {
  const { movieDetails, userKey, fetchMovieDetails } = useUserContext();

  const { id } = useParams();

  useEffect(() => {
    if (!movieDetails.Title) {
      fetchMovieDetails(id, userKey);
    }
  }, [fetchMovieDetails, id, userKey, movieDetails.Title]);

  return (
    <Grid
      style={{
        display: "flex",
        direction: "row",
        justifyContent: "center",
        padding: 10,
      }}
      container
      alignContent="stretch"
      spacing={3}
    >
      <Grid item xs={6} sm={3}>
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
          <CardHeader
            title={movieDetails.Title}
            subheader={movieDetails.Released}
          />
          <CardMedia
            component="img"
            image={movieDetails.Poster}
            alt="Paella dish"
            style={{}}
            height="450"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {movieDetails.Plot}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Stack direction="row" spacing={1}>
              {movieDetails?.Genre?.split(",").map((m) => (
                <Chip label={m} color="success" />
              ))}
            </Stack>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} sm={5}>
        <Card
          sx={{
            bgcolor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "15px",
            height: "100%",
            position: "relative",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Title : {movieDetails.Title}
            </Typography>
            <Typography variant="h6" component="div">
              Actors : {movieDetails.Actors}
            </Typography>
            <Typography variant="h6" component="div">
              Awards: {movieDetails.Awards}
            </Typography>
            <Typography variant="h6" component="div">
              BoxOffice: {movieDetails.BoxOffice}
            </Typography>
            <Typography variant="h6" component="div">
              Country: {movieDetails.Country}
            </Typography>
            <Typography variant="h6" component="div">
              DVD: {movieDetails.DVD}
            </Typography>
            <Typography variant="h6" component="div">
              Director: {movieDetails.Director}
            </Typography>
            <Typography variant="h6" component="div">
              Genre: {movieDetails.Genre}
            </Typography>
            <Typography variant="h6" component="div">
              Language: {movieDetails.Language}
            </Typography>
            <Typography variant="h6" component="div">
              Metascore: {movieDetails.Metascore}
            </Typography>
            <Typography variant="h6" component="div">
              Production: {movieDetails.Production}
            </Typography>
            <Typography variant="h6" component="div">
              Rated: {movieDetails.Rated}
            </Typography>
            <Typography variant="h6" component="div">
              Runtime: {movieDetails.Runtime}
            </Typography>
            <Typography variant="h6" component="div">
              Writer: {movieDetails.Writer}
            </Typography>
            <Typography variant="h6" component="div">
              imdbRating: {movieDetails.imdbRating}
            </Typography>
            <Typography variant="h6" component="div">
              imdbVotes: {movieDetails.imdbVotes}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

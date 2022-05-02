import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [noMovieFoundAlert, setNoMovieFoundAlert] = useState(false);
  const [noMovieFoundAlertContent, setNoMovieFoundAlertContent] = useState("");
  const [userKey, setUserKey] = useState("");
  const navigate = useNavigate();

  const fetchMovies = useCallback(
    (key) => {
      fetch(`https://www.omdbapi.com/?apikey=${key}&s=comedy`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === "True") {
            localStorage.setItem("userCred", key);
            setUserKey(key);
            setMoviesData(data.Search);
            navigate("/dashboard");
          } else {
            setAlertContent(data.Error);
            setAlert(true);
          }
        });
    },
    [navigate]
  );
  const searchMovie = useCallback((query, key) => {
    fetch(
      `https://www.omdbapi.com/?apikey=${key}&s=${query.title}&y=${query.year}&plot=${query.plot}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMoviesData(data.Search);
        } else {
          setNoMovieFoundAlertContent(data.Error);
          setNoMovieFoundAlert(true);
        }
      });
  }, []);

  const fetchMovieDetails = useCallback(
    (id, key) => {
      fetch(`https://www.omdbapi.com/?i=${id}&apikey=${key}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === "True") {
            setMovieDetails(data);
            navigate(`/${id}/details`);
          }
        });
    },
    [navigate, setMovieDetails]
  );

  return (
    <UserContext.Provider
      value={{
        moviesData,
        setMoviesData,
        setUserKey,
        userKey,
        movieDetails,
        setMovieDetails,
        alert,
        alertContent,
        setAlert,
        fetchMovies,
        searchMovie,
        fetchMovieDetails,
        setNoMovieFoundAlert,
        noMovieFoundAlert,
        noMovieFoundAlertContent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => React.useContext(UserContext);

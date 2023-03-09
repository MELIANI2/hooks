import React from 'react';
import MovieCard from '../moviecard/MovieCards';
import classes from "./index.module.css";
const MovieList = ({ movies }) => {
  return (
    <div className={classes.container}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginRight: "50%",
      marginLeft: "50%"
    }}>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

import React from 'react';
import classes from "./index.module.css";
const MovieCard = (movies) => {
  return (
    <div className={classes.container}>
      <img src={movies.movie.posterURL} alt={movies.movie.title} />
      <div className="movie-details">
        <h2>{movies.movie.title}</h2>
        <p>{movies.movie.description}</p>
        <div className="movie-rate">{movies.movie.rate}</div>
      </div>
    </div>
  );
};

export default MovieCard;

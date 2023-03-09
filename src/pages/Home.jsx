import React, { useState } from 'react';
import AddMovie from '../components/addmovie/addMovie';
import Filter from '../components/filter/Filter';
import MovieList from '../components/movielist/MovieList';
import mymovies from '../mymovie';

export default function App() {
  const [movies, setMovies] = useState(mymovies);
  const [rate, setRate] = useState("");

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleRateChange = (rate) => {
    setRate(rate);
  };

  const filteredMovies = movies.filter((movie) => {
    if (rate === "" || movie.rate === parseInt(rate)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="app">
      <Filter rate={rate} onChange={handleRateChange} />
      <MovieList movies={filteredMovies} />
      <AddMovie onAddMovie={handleAddMovie} />
    </div>
  );
};

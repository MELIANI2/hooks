import React, { useState } from "react";
export default function AddMovie({ onAddMovie }) {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (title !== '' && rating !== '') {
        onAddMovie({ title, rating: parseInt(rating) });
        setTitle('');
        setRating('');
      }
    };
  
    return (
      <form className="add-movie" onSubmit={handleSubmit}>
        <h2>Add a New Movie</h2>
        <label htmlFor="title-input">Title:</label>
        <input
          id="title-input"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="rating-input">Rating:</label>
        <input
          id="rating-input"
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>
    );
  }
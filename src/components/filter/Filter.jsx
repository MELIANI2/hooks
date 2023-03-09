import React from "react";
export default function Filter({ rate, onChange }) {
  
  return (
    <div className="filter">
      <label htmlFor="rate-input">Rating:</label>
      <select
        id="rate-input"
        value={rate}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">All</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
        <option value="6">6 stars</option>
        <option value="7">7 stars</option>
        <option value="8">8 stars</option>
        <option value="9">9 stars</option>
        <option value="10">10 stars</option>
      </select>
    </div>
  );
}
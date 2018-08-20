import React from "react";
import "./movielist.css";


const MovieListItem = ({ movie }) => {
  const { title, poster_path } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;

  return (
    <li className="movie-item">
      <img src={imgUrl} alt=""/>
      <span>{title}</span>
    </li>
  )
}

export default MovieListItem;
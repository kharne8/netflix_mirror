import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const baseURL = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {movies.map((movie, key) => (
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;

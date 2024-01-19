// LastMovies.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./LastMovies.css"

const LastMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie',
          {
            params: {
              api_key: '402d9bf8861a09c017a7ee5461262640',
              language: 'es-ES',
              sort_by: 'vote_count.desc', 
              include_adult: true,
              include_video: false,
              page: 1, 
              with_genres: '878',
              year: 2023
            },
          }
        );
        // Limita el número de películas a 6
        setMovies(response.data.results.slice(0, 6));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);


  return (
    <div className='lastmovie-container'>
      {movies.map((movie) => (
        <div key={movie.id} className='movies1' >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
};

export default LastMovies;

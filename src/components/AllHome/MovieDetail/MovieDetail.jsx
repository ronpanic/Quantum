import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  
import "./MovieDetail.css";
import Navbar from '../../Navbar/Navbar';
import YouTube from 'react-youtube';

const MovieDetail = ({ getMovieById }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const params = useParams(); 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieId = params.id; 
      const details = await getMovieById(movieId);
      setMovieDetails(details);
      console.log(details);
    };

    fetchMovieDetails();
  }, [getMovieById, params.id]);

  if (!movieDetails) {
    return <div>Cargando detalles de la película...</div>;
  }

  const category = movieDetails.genres.map(genre => genre.name).join(', ');
  const storyline = movieDetails.overview;
  
  const productionCompanies = movieDetails.production_companies
    ? movieDetails.production_companies.map(company => company.name).join(', ')
    : 'Information not available';

  const stars = movieDetails.vote_average;

  const maxTitleLength = 25;
  const maxStorylineLength = 150;

  const truncatedTitle = movieDetails.title.length > maxTitleLength
    ? `${movieDetails.title.slice(0, maxTitleLength)}...`
    : movieDetails.title;

  const truncatedStoryline = storyline.length > maxStorylineLength
    ? `${storyline.slice(0, maxStorylineLength)}...`
    : storyline;

    const pixelsVideoId = 'XAHprLW48no';

    const opts = {
      height: '220',
      width: '450',
      playerVars: {
        autoplay: 0,
      },
    };

  return (
    <div>
      <Navbar />
      <div className='moviedetail-container'>
        <h1>{truncatedTitle}</h1>
        <img src={`https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path}`} alt={truncatedTitle} />
        <div className='content-container'>
          <div className='text-container2'>
            <div className='date2'>
              <p>2019 </p>
              <ion-icon name="ellipsis-vertical"></ion-icon>
              <p>Action/Science Fiction</p>
              <ion-icon name="ellipsis-vertical"></ion-icon>
              <p>2h 10m</p>
            </div>
          </div>
          <div className="buttons-container2">
            <div>
              <button> <ion-icon name="play"></ion-icon> Watch now</button>
            </div>
            <button> <ion-icon name="add-circle"></ion-icon> Add list</button>
          </div>
          <div>
            <div className='details-movie-container'>
              <div className='detail1'>
                <div>
                  <h6>Category</h6>
                  <p>{category}</p>
                </div>
                <div>
                  <h6>Storyline</h6>
                  <p>{truncatedStoryline}</p>
                </div>
              </div>
              <div className='detail2'>
                <div>
                  <h6>Production Companies</h6>
                  <p>{productionCompanies}</p>
                </div>
                <div>
                  <h6 className='stars'>Stars</h6>
                  <p>{stars}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='extramovies-container'>

        <div className='movie1'>
          <h6><ion-icon name="logo-youtube"></ion-icon>MEN IN BLACK</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime incidunt odio ratione</p>
        </div>

        <div className='movie2'>
          <h6><ion-icon name="logo-youtube"></ion-icon>PIXELS</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime incidunt odio ratione</p>
        </div>

        <div className='trailers-container'>

          <div className='trailer1'>
            <YouTube videoId={pixelsVideoId} opts={opts} />
          </div>

          <div className='trailer2'>
            <YouTube videoId={pixelsVideoId} opts={opts} />
          </div>

        </div>

      </div>

    </div>
  );
}

export default MovieDetail;

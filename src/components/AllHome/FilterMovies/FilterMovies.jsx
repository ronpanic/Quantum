import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./FilterMovies.css"
import AOS from 'aos'
import  'aos/dist/aos.css'

const FilterMovies = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    const formatReleaseDate = (releaseDate) => {
        if (!releaseDate) {
            return 'Fecha de lanzamiento desconocida';
        }

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(releaseDate).toLocaleDateString('es-ES', options);
    };

    const formatRuntime = (runtime) => {
        if (!runtime || runtime <= 0) {
            return 'Duración desconocida';
        }

        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;

        const hoursText = hours > 1 ? 'horas' : 'hora';
        const minutesText = minutes > 1 ? 'minutos' : 'minuto';

        if (minutes === 0) {
            return `${hours} ${hoursText}`;
        }

        if (hours === 0) {
            return `${minutes} ${minutesText}`;
        }

        return `${hours} ${hoursText} ${minutes} ${minutesText}`;
    };

    const truncateMovieTitle = (title, maxLength) => {
        return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
    };

    const truncateOverview = (overview, maxWords) => {
        const words = overview.split(' ');
        const truncatedWords = words.slice(0, maxWords);
        return truncatedWords.join(' ') + (words.length > maxWords ? '...' : '');
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const resultsPerPage = 20;
                let allMovies = [];

                for (let page = 1; page <= 2; page++) {
                    const response = await axios.get(
                        'https://api.themoviedb.org/3/discover/movie',
                        {
                            params: {
                                api_key: '402d9bf8861a09c017a7ee5461262640',
                                language: 'es-ES',
                                sort_by: 'popularity.desc',
                                include_adult: true,
                                include_video: false,
                                page: page,
                                primary_release_date_gte: '2023-01-01',
                            },
                        }
                    );

                    allMovies = allMovies.concat(response.data.results);

                    if (response.data.results.length < resultsPerPage) {
                        break;
                    }
                }

                setMovies(allMovies.slice(0, 24));
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        const fetchGenres = async () => {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/genre/movie/list',
                    {
                        params: {
                            api_key: '402d9bf8861a09c017a7ee5461262640',
                            language: 'es-ES',
                        },
                    }
                );

                setGenres(response.data.genres);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchMovies();
        fetchGenres();
    }, []);

    const fetchMovieDetails = async (movieId) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                params: {
                    api_key: '402d9bf8861a09c017a7ee5461262640',
                    language: 'es-ES',
                },
            });

            return response.data;
        } catch (error) {
            console.error(`Error fetching details for movie ${movieId}:`, error);
            return null;
        }
    };

    useEffect(() => {
        const fetchDetailsForMovies = async () => {
            const moviesWithDetails = await Promise.all(
                movies.map(async (movie) => {
                    const details = await fetchMovieDetails(movie.id);
                    return {
                        ...movie,
                        details,
                    };
                })
            );

            setMovies(moviesWithDetails);
        };

        if (movies.length > 0) {
            fetchDetailsForMovies();
        }
    }, [movies]);

    const handleImageLoad = (event) => {
        event.target.classList.add('loaded');
    };

    useEffect(()=> {
        AOS.init({})
      } , [])
    
    return (
        <div>
            <div className='filter-container'>
                <button><ion-icon name="add-outline"></ion-icon>Popular</button>
                <button><ion-icon name="add-outline"></ion-icon>Horror</button>
                <button><ion-icon name="add-outline"></ion-icon>Action</button>
                <button><ion-icon name="add-outline"></ion-icon>Thriller</button>
                <button><ion-icon name="add-outline"></ion-icon>Romance</button>
                <button><ion-icon name="bookmark"></ion-icon>My List</button>
            </div>

            <div className='movies-container'>
                <div className='movies-wrapper'>
                    {movies.map((movie) => (
                        <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <div data-aos="fade-up" data-aos-duration="2000" className='movies2'>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                loading="lazy"
                                onLoad={handleImageLoad}
                            />
                            <div className='movie-icon'>
                                <ion-icon name="play-outline"></ion-icon>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                            <div className='movie-info'>
                                <h3>{truncateMovieTitle(movie.title, 30)}</h3>
                                <div className='horizontal-line'></div>
                                <p className='p1'>{formatReleaseDate(movie.release_date)}</p>
                                <p className='p2'>
                                    {movie.genre_ids.map((genreId, index) => {
                                        const genre = genres.find(g => g.id === genreId);
                                        return genre ? genre.name + (index < movie.genre_ids.length - 1 ? ', ' : '') : '';
                                    })}
                                </p>
                                <div className='summary-container'>
                                    <div className='summary-flex'>
                                        <h4>SUMMARY</h4>
                                        {movie.details && (
                                            <p>
                                                <ion-icon name="heart"></ion-icon>
                                                {movie.details.vote_count}
                                            </p>
                                        )}
                                    </div>
                                    <p>{truncateOverview(movie.overview, 25)}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
            <div className='moremovies-container'>
                <div className='more-flex'>
                    <button>1 de 542</button>
                    <button><ion-icon name="arrow-forward"></ion-icon></button>
                </div>
            </div>
        </div>  
    );
}

export default FilterMovies;

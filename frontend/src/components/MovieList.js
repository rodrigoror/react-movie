import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch movies from the backend
        axios.get('http://localhost:5000/api/movies')
            .then(response => setMovies(response.data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
        <div>
            <h1>Movie Catalog</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {movies.map(movie => (
                    <div key={movie.id} style={{ width: '200px' }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            style={{ width: '100%' }}
                        />
                        <h3>{movie.title}</h3>
                        <p>Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
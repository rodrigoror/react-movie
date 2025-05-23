const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// TMDb API Configuration
const TMDB_API_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Route to fetch popular movies
app.get('/api/movies', async (req, res) => {
    try {
        const response = await axios.get(`${TMDB_API_URL}/movie/popular`, {
            params: { api_key: TMDB_API_KEY, language: 'en-US', page: 1 },
        });
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
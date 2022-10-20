import axios from "axios"

const KEY = '2acc48bc8101b89794229029120e4b70'
const BASE_URL = 'https://api.themoviedb.org/3/'

async function getTrendingMovies (page=1) {
    const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}&page=${page}`)
    return response
}

async function getMovieByKeyword (keyword, page=1) {
    const response = await axios.get(`${BASE_URL}search/movie?api_key=${KEY}&query=${keyword}&page=${page}`)
    return response
}

async function getMovieDetails (movie_id) {
    const response = await axios.get(`${BASE_URL}movie/${movie_id}?api_key=${KEY}`)

    return response
}

async function getMovieCredits (movie_id) {
    const response = await axios.get(`${BASE_URL}movie/${movie_id}/credits?api_key=${KEY}`)
    return response
}

async function getMovieReviews (movie_id) {
    const response = await axios.get(`${BASE_URL}movie/${movie_id}/reviews?api_key=${KEY}`)
    return response
}

const API = {
    getTrendingMovies,
    getMovieByKeyword,
    getMovieDetails,
    getMovieCredits,
    getMovieReviews
}

export default API
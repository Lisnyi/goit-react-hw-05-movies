import { useState, useEffect } from "react"
import MoviesList from "components/MoviesList/MoviesList"
import API from "shared/API/API"

const { getTrendingMovies } = API

export default function HomePage() {
  const [moviesList, setMoviesList] = useState([])
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(null)

  const isMovies = Boolean(moviesList.length)

  useEffect(()=>{
    async function fetchTrendingMovies () {
      try {
        setLoader(true)
        setError(null)
        const data = await getTrendingMovies()
        setMoviesList(data.data.results)
        return
      } catch (e) {
        setMoviesList([])
        setError('Whoops something went wrong')
      } finally {
        setLoader(false)
      }
    }

    fetchTrendingMovies ()
  },[])

  return (
    <>
      <h1>Trending today</h1>
      {loader && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {isMovies && <MoviesList moviesList={moviesList} />}
    </>
  )
}

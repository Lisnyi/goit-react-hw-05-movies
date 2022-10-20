import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MoviesList from "components/MoviesList/MoviesList"
import API from "shared/API/API"

const { getMovieByKeyword } = API

export default function Movies() {
  const [query, setQuery] = useState('')
  const [moviesList, setMoviesList] = useState([])
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const searchQuery = searchParams.get("query")
  const isMovies = Boolean(moviesList.length)

  useEffect (() => {
    async function fetchMovieByKeyword (searchQuery) {
      if (!searchQuery) {
        return
      }
      try {
        setLoader(true)
        setError(null)
        const data = await getMovieByKeyword(searchQuery)
        const { data: {results, total_results}} = data
        setMoviesList(results)
        if (total_results === 0) {
          setError('We did not find any images for your request')
          return
        }
        return
      } catch (e) {
        setMoviesList([])
        setError('Whoops something went wrong')
      } finally {
        setLoader(false)
      }
    }

    fetchMovieByKeyword(searchQuery)
  }, [searchQuery])



  function handleChange ({target}) {
    setQuery(target.value)
  }
  
  function onSearch () {
    const search = query.trim() !== "" ? {query: query.trim()} : null
    search && setSearchParams (search)
  }

  return (
    <>
      <input name="search" type="text" value={query} onChange={handleChange} autoComplete="off"/>
      <button type="button" onClick={onSearch}>Search</button>
      {loader && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {isMovies && <MoviesList moviesList={moviesList} />}
    </>
  )
}

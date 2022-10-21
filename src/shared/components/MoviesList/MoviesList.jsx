import { Link, useLocation } from "react-router-dom"
import PropTypes from 'prop-types'
import ListOfMovies from "./MoviesList.styled"

export default function MoviesList({moviesList}) {
  const location = useLocation()
  return (
    <ListOfMovies>
        {moviesList.map(({id, original_title}) =>
            (<li key={id}>
                <Link state={{from: location}} to={`/movies/${id}`} >{original_title}</Link>
            </li>))}
    </ListOfMovies>
  )
}

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired
  }))
}

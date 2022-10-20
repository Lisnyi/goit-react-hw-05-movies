import { Link } from "react-router-dom"
import ListOfMovies from "./MoviesList.styled"

export default function MoviesList({moviesList}) {
  return (
    <ListOfMovies>
        {moviesList.map(({id, original_title}) =>
            (<li key={id}>
                <Link to={`/movies/${id}`} >{original_title}</Link>
            </li>))}
    </ListOfMovies>
  )
}

import { Link } from "react-router-dom"
import ListOfMovies from "./MoviesList.styled"

export default function MoviesList({moviesList}) {
  return (
    <ListOfMovies>
        {moviesList.map(({id, original_title}) =>
            (<li key={id}>
                <Link >{original_title}</Link>
            </li>))}
    </ListOfMovies>
  )
}

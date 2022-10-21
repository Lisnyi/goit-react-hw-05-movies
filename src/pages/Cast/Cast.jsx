import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { API } from "shared"
import noposter from '../../images/noposter.jpg'
import { CastList } from "./Cast.styled"


const { getMovieCredits } = API

export default function Cast() {
    const [movieCast, setMovieCast] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)

    const { movieId } = useParams()
    const isCast = Boolean(movieCast.length)

    useEffect(() => {
        async function fetchMovieCast () {
            try {
                setLoader(true)
                setError(null)
                setMovieCast([])
                const data = await getMovieCredits(movieId)
                setMovieCast(data.data.cast)
                return
              } catch (e) {
                setMovieCast([])
                setError('Whoops something went wrong')
              } finally {
                setLoader(false)
              }
        }

        fetchMovieCast()
    },[movieId])

    return (
        <>
            {loader && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {isCast &&   <CastList>
                            {movieCast.map(({character, original_name, profile_path, credit_id}) => <li key={credit_id
}>
                                <img src={profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : noposter} alt={original_name} />
                                <p>{original_name}</p>
                                <p>Character: {character}</p>
                            </li>)}
                        </CastList>}
        </>
    )
}

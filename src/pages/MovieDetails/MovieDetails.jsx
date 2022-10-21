import { Outlet, useParams, Link, useNavigate, useLocation} from "react-router-dom"
import { useState, useEffect } from "react"
import { API } from "shared"
import noposter from '../../images/noposter.jpg'

const { getMovieDetails } = API

export default function MovieDetails() {
    const [moviesDetails, setMoviesDetails] = useState({})
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)

    const { movieId } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from || '/'


    useEffect(()=>{
        async function fetchMovieDetails () {
            try {
                setLoader(true)
                setError(null)
                setMoviesDetails({})
                const {data} = await getMovieDetails(movieId)
                setMoviesDetails(data)
                return
              } catch (e) {
                setMoviesDetails({})
                setError('Whoops something went wrong')
              } finally {
                setLoader(false)
              }
        }

        fetchMovieDetails()
    },[movieId])

    const { original_title, release_date, poster_path, vote_average, overview, genres } = moviesDetails
    const isDetails = Boolean(Object.keys(moviesDetails).length)
    const userScore = Number((vote_average*10).toFixed())
    const imageURL = poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : noposter
    const getYear = () => new Date(release_date).getFullYear();
    
    function changePagePath (page) {
        let path = `/movies/${movieId}`
        if (location.pathname.includes(`${page}`)) {
            return path
        }
        switch (page) {
            case "cast":
                path =  `/movies/${movieId}/cast`
                break
            case "reviews":
                path = `/movies/${movieId}/reviews`
                break
            default: path = `/movies/${movieId}`
        }
        return path
    }
    
    const goBack = () => navigate(from)

    return (
            <> 
                <button type="button" onClick={goBack}>Go back</button>
                {loader && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {isDetails && <div>
                                    <img src={imageURL} alt={original_title} />
                                    <h2>{original_title} {release_date && `(${getYear()})`}</h2>
                                    {userScore !== 0 && <p>User Score: {userScore}%</p>}
                                    <h3>Overview</h3>
                                    <p>{overview}</p>
                                    {genres.length > 0 &&   <>
                                                                <h4>Ganres</h4>
                                                                <ul>
                                                                    {genres.map(genre => (
                                                                        <li key={genre.id}>{genre.name}</li>
                                                                    ))}
                                                                </ul>
                                                            </>}
                                    <div>
                                        <h5>Additional information</h5>
                                        <ul>
                                            <li><Link state={{from: from}} to={changePagePath('cast')}>Cast</Link></li>
                                            <li><Link state={{from: from}} to={changePagePath('reviews')}>Reviews</Link></li>
                                        </ul>
                                    </div>
                                    <Outlet/>
                                </div>}
            </>
    )
}

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { API } from "shared"

const { getMovieReviews } = API

export default function Reviews() {
    const [movieReviews, setMovieReviews] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)

    const { movieId } = useParams()
    const isReviews = Boolean(movieReviews.length)


    useEffect(() => {
        async function fetchMovieReviews () {
            try {
                setLoader(true)
                setError(null)
                setMovieReviews([])
                const data = await getMovieReviews(movieId)
                setMovieReviews(data.data.results)
                return
              } catch (e) {
                setMovieReviews([])
                setError('Whoops something went wrong')
              } finally {
                setLoader(false)
              }
        }

        fetchMovieReviews()
    },[movieId])

    return (
        <>
            {loader && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {isReviews &&   <ul>
                                {movieReviews.map(({author, content, id}) => <li key={id}>
                                    <article>
                                        <b>Author: {author}</b>
                                        <p>{content}</p>
                                    </article>
                                </li>)}
                            </ul>}
            {!isReviews && <p>We don`t have any reviws for this movie</p>}
        </>
    )
}

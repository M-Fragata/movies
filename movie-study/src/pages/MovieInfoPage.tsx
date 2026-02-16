import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

type movieInfoProps = {
    Actors: string,
    Awards: string,
    Country: "Mexico"
    Director: string,
    Genre: string,
    Language: string,
    Plot: string,
    Poster: string,
    Released: string,
    Runtime: string,
    Title: string,
    Writer: string,
    Year: string,
    imdbID: string,
    imdbRating: string,
    imdbVotes: string,
}

export function MovieInfoPage() {

    const { id } = useParams()
    const [infoMovie, setInfoMovie] = useState<movieInfoProps>()
    const MOVIE_API = import.meta.env.VITE_MOVIE_API

    async function handleGetInfoMovie() {
        try {
            if (!id) return

            const response = await fetch(`http://www.omdbapi.com/?apikey=${MOVIE_API}&i=${id}`)

            if (!response.ok) return

            const data = await response.json()

            setInfoMovie(data)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        handleGetInfoMovie()
    }, [])

    return (
        <div>Informando</div>
    )
}
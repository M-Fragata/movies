import { useState, useEffect } from "react"
import { useOutletContext, Link } from "react-router-dom"
import './App.css'

type moviesProps = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}


const MOVIE_API = import.meta.env.VITE_MOVIE_API

export function MoviesPage() {

    const movieName = useOutletContext<string>()
    const [movies, setMovies] = useState<moviesProps[]>()


    async function handleGetMovies() {

        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${MOVIE_API}&s=${movieName}`)

            if (!response.ok) {
                alert("Falha ao buscar movies na API")
                return
            }

            const data = await response.json()
            setMovies(data.Search)
            
        } catch (error) {
            console.log(error)
            return
        }

    }

    useEffect(() => {
        setTimeout(() => {
            handleGetMovies()
        }, 1000)
    }, [movieName])

    return (
        <main>
            {movies && movies.map((movie) => {
                return (
                    <div
                        key={movie.imdbID}>
                        <span>Título: {movie.Title}</span>
                        <Link to={`/info/${movie.imdbID}`}>
                            <img src={movie.Poster} alt={`Poster do filme ${movie.Title}`} />
                        </Link>

                    </div>
                )
            })}
        </main>
    )
}
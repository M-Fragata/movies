import { useState } from "react"

import './App.css'
import { Input } from "../components/Input"
import { Button } from "../components/Button"

import lupa from "../assets/lupa.png"

const MOVIE_API = import.meta.env.VITE_MOVIE_API

type moviesProps = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

export function App() {

  const [movieName, setMovieName] = useState("")
  const [movies, setMovies] = useState<moviesProps[]>()


  async function handleGetMovies() {
    if (!movieName || movieName.trim() === "") {
      alert("Digite um filme válido")
      return
    }

    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${MOVIE_API}&s=${movieName}`)

      if (!response.ok) {
        alert("Falha ao buscar movies na API")
        return
      }

      const data = await response.json()
      console.log(data.Search)
      setMovies(data.Search)
      
    } catch (error) {
      console.log(error)
      return
    }

  }

  return (
    <>
      <header>
        <Input
          onChange={(event) => setMovieName(event.target.value)}
          type='text'
        />
        <Button
          handleClick={handleGetMovies}
          icon={lupa}
        />
      </header>
      <main>
        {movies && movies.map((movie) => {
         return (
         <div 
         key={movie.imdbID}>
          <span>Título: {movie.Title}</span>
          <img src={movie.Poster} alt={`Poster do filme ${movie.Title}`} />
          </div>
        )
        })}
      </main>
    </>
  )
}



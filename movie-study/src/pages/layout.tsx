import { useState } from "react"
import { Outlet } from "react-router-dom"
import './App.css'
import { Input } from "../components/Input"
import { Button } from "../components/Button"

import lupa from "../assets/lupa.png"


export function LayoutPage() {

  const [movieName, setMovieName] = useState<string>("")

  return (
    <div id="divContainer">
      <header>
        <Input
          onChange={(event) => setMovieName(event.target.value)}
          type='text'
        />
        <Button
          icon={lupa}
        />
      </header>
      <Outlet  context={movieName}/>
      <footer>Page 1 de 2</footer>
    </div>
  )
}



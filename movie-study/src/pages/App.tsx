import { Route, Routes } from "react-router-dom"
import { LayoutPage } from "./layout"
import { MoviesPage } from "./MoviesPage"
import { MovieInfoPage } from "./MovieInfoPage"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<MoviesPage />} />
        <Route path="/info/:id" element={<MovieInfoPage />} />
      </Route>

    </Routes>
  )
}
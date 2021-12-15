import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/UI/Navigation/Navigation'
import { CharactersPage } from './components/CharacterPage/CharactersPage'
import { EpisodePage } from './components/EpisodePage/EpisodePage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route element={<CharactersPage />} path="/rick-and-morty/" />
          <Route element={<EpisodePage />} path="/rick-and-morty/episode" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

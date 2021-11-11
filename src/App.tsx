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
          <Route element={<CharactersPage />} path="/" />
          <Route element={<EpisodePage />} path="/episode" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { getCharacters } from '../../servises/Api'
import { CharacterCard } from './CharacterCard'
import Pagination from '@mui/material/Pagination'
import { SearchContainer } from '../UI/SearchContainer/SearchContainer'
import { CharacterModal } from './CharacterModal'
import './CharacterPage.scss'

const filtersList = ['species', 'status', 'gender']

export const CharactersPage: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter>(
    {} as ICharacter
  )
  const [currentFilters, setCurrentFilters] = useState(
    {} as Record<string, string>
  )
  const [tottalPages, setTottalPages] = useState<number>(0)

  function fetchCharacters(filters: Record<string, string>, page?: number) {
    getCharacters(filters, page)
      .then((response) => {
        setCharacters(response.results)
        setTottalPages(response.info.pages)
      })
      .catch(() => {
        setCharacters([])
        setTottalPages(0)
      })
  }

  useEffect(() => {
    fetchCharacters(currentFilters)
  }, [currentFilters])

  function handleOpenModal(character: ICharacter) {
    setSelectedCharacter(character)
  }

  function handleCloseModal() {
    setSelectedCharacter({} as ICharacter)
  }

  function handleFilter(filterName: string, filterValue: string) {
    setCurrentFilters((prev) => {
      const result = { ...prev }
      result[filterName] = filterValue
      return result
    })
  }

  return (
    <div className="Container">
      <h1 className="Title">Characters</h1>
      <SearchContainer
        onFilterChange={handleFilter}
        filtersList={filtersList}
      />
      <ul className="Character-list">
        {!!characters.length &&
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              handleSelect={handleOpenModal}
            />
          ))}
      </ul>

      <Pagination
        count={tottalPages}
        color="primary"
        onChange={(_, page) => {
          fetchCharacters(currentFilters, page)
        }}
      />
      <CharacterModal
        character={selectedCharacter}
        onClose={handleCloseModal}
      />
    </div>
  )
}

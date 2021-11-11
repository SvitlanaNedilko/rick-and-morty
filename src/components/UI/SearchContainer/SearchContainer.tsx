import React from 'react'
import { SearchComponent } from './SearchComponent'
import './SearchContainer.scss'

const filtersValues: Record<string, string[]> = {
  gender: ['', 'male', 'female', 'genderless', 'unknown'],
  status: ['', 'alive', 'dead', 'unknown'],
  species: ['', 'Mythological Creature', 'Alien', 'Human'],
  name: [''],
}

interface ISearchContainerProps {
  onFilterChange: (name: string, value: string) => void
  filtersList: string[]
}

export const SearchContainer: React.FC<ISearchContainerProps> = ({
  onFilterChange,
  filtersList,
}) => {
  return (
    <div className="Search-Container">
      {filtersList.map((filter) => (
        <SearchComponent
          key={filter}
          onFilterChange={onFilterChange}
          name={filter}
          values={filtersValues[filter]}
        />
      ))}
    </div>
  )
}

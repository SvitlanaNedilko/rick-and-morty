import React, { useState, useEffect } from 'react'
import { getEpisode } from '../../servises/Api'
import { EpisodeTable } from './EpisodeTable'
import Pagination from '@mui/material/Pagination'
import { SearchContainer } from '../UI/SearchContainer/SearchContainer'
import './EpisodePage.scss'

const filtersList = ['name']

export const EpisodePage: React.FC = () => {
  const [episodes, setEpisodes] = useState<IEpisode[]>([])

  const [currentFilters, setCurrentFilters] = useState(
    {} as Record<string, string>
  )
  const [tottalPages, setTottalPages] = useState<number>(0)

  function fetchEpisodes(filters: Record<string, string>, page?: number) {
    getEpisode(filters, page)
      .then((response) => {
        setEpisodes(response.results)
        setTottalPages(response.info.pages)
      })
      .catch(() => {
        setEpisodes([])
        setTottalPages(0)
      })
  }

  useEffect(() => {
    fetchEpisodes(currentFilters)
  }, [currentFilters])

  function handleFilter(filterName: string, filterValue: string) {
    setCurrentFilters((prev) => {
      const result = { ...prev }
      result[filterName] = filterValue
      return result
    })
  }

  return (
    <div className="Container">
      <h1 className="Title">Episodes</h1>
      <SearchContainer
        onFilterChange={handleFilter}
        filtersList={filtersList}
      />
      <EpisodeTable episodes={episodes} />

      <Pagination
        count={tottalPages}
        color="primary"
        onChange={(_, page) => {
          fetchEpisodes(currentFilters, page)
        }}
      />
    </div>
  )
}

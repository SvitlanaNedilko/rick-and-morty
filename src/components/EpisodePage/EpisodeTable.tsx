import React from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './EpisodeTable.scss'
// import { getSelectedCharacters } from '../../servises/Api'

interface IEpisodeTableProps {
  episodes: IEpisode[]
}

export const EpisodeTable: React.FC<IEpisodeTableProps> = ({ episodes }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: 'text.disabled' }}>
          <TableRow>
            <TableCell align="left">Episode</TableCell>
            <TableCell align="left" sx={{ maxWidth: 280 }}>
              Name
            </TableCell>
            <TableCell align="left">Air Date</TableCell>
            <TableCell align="left">Characters</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {episodes.map((episode) => (
            <TableRow
              key={episode.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{episode.episode}</TableCell>
              <TableCell align="left" sx={{ maxWidth: 280 }}>
                {episode.name}
              </TableCell>
              <TableCell align="left">{episode.air_date}</TableCell>
              <TableCell align="left">
                <ul className="character-list">
                  {episode.characters.map((character) => (
                    <li key={character}>{character}</li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

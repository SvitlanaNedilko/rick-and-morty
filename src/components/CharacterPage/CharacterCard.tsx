import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

interface ICharacterCardProps {
  character: ICharacter
  handleSelect: (data: ICharacter) => void
}

export const CharacterCard: React.FC<ICharacterCardProps> = ({
  character,
  handleSelect,
}) => (
  <>
    <li onClick={() => handleSelect(character)}>
      <Card sx={{ maxWidth: 345, bgcolor: 'text.disabled' }}>
        <CardHeader title={character.name} />
        <CardMedia
          component="img"
          height="100%"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            gender:{character.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.status}-{character.species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            location: {character.location.name}
          </Typography>
        </CardContent>
      </Card>
    </li>
  </>
)

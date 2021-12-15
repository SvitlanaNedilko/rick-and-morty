import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { SxProps } from '@mui/system'

const style: SxProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  '&:focus': {
    border: 'none',
    outline: 'none',
  },
}

interface ICharacterModalProps {
  character: ICharacter
  onClose: () => void
}

export const CharacterModal: React.FC<ICharacterModalProps> = ({
  character,
  onClose,
}) => (
  <Modal open={!!character?.id} onClose={onClose}>
    <Box sx={style}>
      <img src={character?.image} alt={character?.name} />
      <p>name:{character?.name}</p>
      <p>gender:{character?.gender}</p>
      <p>
        {character?.status}-{character?.species}
      </p>
      <p>location: {character?.location?.name}</p>
    </Box>
  </Modal>
)

import React, { useState } from 'react'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'

interface ISearchComponentProps {
  onFilterChange: (name: string, value: string) => void
  name: string
  values: string[]
}

export const SearchComponent: React.FC<ISearchComponentProps> = ({
  onFilterChange,
  name,
  values,
}) => {
  const [textInputValue, setTextInputValue] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTextInputValue(event.target.value)
    onFilterChange(event.target.name, event.target.value)
  }

  function renderRadio() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{name}</FormLabel>
        <RadioGroup
          aria-label={name}
          defaultValue=""
          name={name}
          onChange={handleChange}
        >
          {values.map((value) => (
            <FormControlLabel
              key={value || 'All'}
              value={value}
              control={<Radio />}
              label={value || 'All'}
            />
          ))}
        </RadioGroup>
      </FormControl>
    )
  }

  function renderInput() {
    return (
      <TextField
        id={name}
        name={name}
        label={name}
        value={textInputValue}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
    )
  }

  return <form>{values.length === 1 ? renderInput() : renderRadio()}</form>
}

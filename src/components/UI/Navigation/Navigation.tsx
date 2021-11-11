import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar } from '@mui/material'
import './Navigation.scss'

export const NavBar: React.FC = () => (
  <nav>
    <AppBar position="static" color="default">
      <Toolbar className="Navigation">
        <NavLink
          className={({ isActive }) => 'link' + (isActive ? ' activlink' : '')}
          to={'/test-rick-and-morty'}
        >
          Characters
        </NavLink>
        <NavLink
          className={({ isActive }) => 'link' + (isActive ? ' activlink' : '')}
          to={'/test-rick-and-morty/episode'}
        >
          Episode
        </NavLink>
      </Toolbar>
    </AppBar>
  </nav>
)

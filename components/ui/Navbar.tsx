import { MenuOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { UIContext } from '../../context/ui'

export const Navbar = () => {

  const {openSideMenu} = useContext(UIContext)

  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
                onClick={openSideMenu}
            >
                <MenuOutlined />
            </IconButton>
            <Typography variant='h6'>OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}

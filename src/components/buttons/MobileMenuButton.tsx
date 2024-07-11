'use client'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useMobileMenuStore } from '@/lib/store/zustand'

export default function MobileMenuButton() {
  const { toggleMenu } = useMobileMenuStore()
  return (
    <IconButton
      color='inherit'
      aria-label='open drawer'
      edge='start'
      onClick={() => toggleMenu(true)}
      sx={{ display: { md: 'none' }, color: 'black' }}
    >
      <MenuIcon fontSize='large' />
    </IconButton>
  )
}

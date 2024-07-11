'use client'

import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useMobileMenuStore } from '@/lib/store/zustand'

export default function CloseMenuButton() {
  const { toggleMenu } = useMobileMenuStore()
  return (
    <IconButton
      color='inherit'
      aria-label='open drawer'
      edge='start'
      onClick={() => toggleMenu(false)}
      sx={{ mr: 2, display: { md: 'none' } }}
    >
      <CloseIcon fontSize='large' />
    </IconButton>
  )
}

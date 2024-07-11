'use client'

import IconButton from '@mui/material/IconButton'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function ToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <IconButton onClick={scrollToTop}>
      <KeyboardArrowUpIcon sx={{ color: 'white' }} fontSize='large' />
    </IconButton>
  )
}

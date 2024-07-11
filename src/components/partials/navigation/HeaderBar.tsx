import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'
import { useMobileMenuStore } from '@/lib/store/zustand'
import Typography from '@mui/material/Typography'
import MobileMenuButton from '@/components/buttons/MobileMenuButton'
import Link from '@mui/material/Link'
import NextLink from 'next/link'

export default function HeaderBar() {
  return (
    <AppBar
      position='fixed'
      sx={{
        // zIndex: theme => theme.zIndex.drawer + 1,
        maxWidth: 1920,
        left: 0,
        right: 0,
        mx: 'auto',
        backgroundColor: {
          xs: 'rgba(255, 255, 255, 1)',
          md: 'rgba(255, 255, 255, 0.8)',
        },
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          // backgroundColor: 'transparent',
        }}
      >
        <Link component={NextLink} href='/' sx={{ textDecoration: 'none' }}>
          <Typography variant='h4' color='black' component='span'>
            3D-Theorie
          </Typography>
        </Link>
        <MobileMenuButton />
      </Toolbar>
    </AppBar>
  )
}

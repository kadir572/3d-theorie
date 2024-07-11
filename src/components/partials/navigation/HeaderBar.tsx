import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MobileMenuButton from '@/components/buttons/MobileMenuButton'
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import { navLinks } from '@/lib/links/navigation'

export default function HeaderBar() {
  return (
    <AppBar
      position='fixed'
      sx={{
        maxWidth: 1920,
        left: 0,
        right: 0,
        px: 3,
        pt: 2,
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: 2,
        }}
      >
        <Link component={NextLink} href='/' sx={{ textDecoration: 'none' }}>
          <Typography variant='h4' color='black' component='span'>
            3D-Theorie
          </Typography>
        </Link>
        <MobileMenuButton />
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          {navLinks.map((el, index) => (
            <Link
              component={NextLink}
              href={el.href}
              key={index}
              sx={{ textDecoration: 'none', color: 'black' }}
            >
              <Typography variant='h5' component='span'>
                {el.label}
              </Typography>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

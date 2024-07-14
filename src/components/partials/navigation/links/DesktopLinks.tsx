'use client'

import Box from '@mui/material/Box'
import CircleIcon from '@mui/icons-material/Circle'
import { navLinks } from '@/lib/links/navigation'
import { usePathname } from 'next/navigation'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'

export default function DesktopLinks() {
  const pathname = usePathname()
  let pathnameWithoutLocale = pathname.substring(3)
  if (pathnameWithoutLocale === '') pathnameWithoutLocale = '/'
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        gap: 4,
      }}
    >
      {navLinks.map((el, index) => (
        <Box key={index} sx={{ position: 'relative' }}>
          <CircleIcon
            sx={{
              fontSize: 'small',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: -8,
              mx: 'auto',
              color: 'theorieBlue.main',
              display: pathnameWithoutLocale === el.href ? 'block' : 'none',
            }}
          />
          <Link
            component={NextLink}
            href={el.href}
            sx={{ textDecoration: 'none', color: 'black' }}
          >
            <Typography variant='h5' component='span'>
              {el.label}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  )
}

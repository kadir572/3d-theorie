'use client'

import Box from '@mui/material/Box'
import CircleIcon from '@mui/icons-material/Circle'
import { navLinks } from '@/lib/links/navigation'
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import Typography from '@mui/material/Typography'
import { useMobileMenuStore } from '@/lib/store/zustand'

export default function MobileLinks() {
  const { toggleMenu } = useMobileMenuStore()
  const pathname = usePathname()
  let pathnameWithoutLocale = pathname.substring(3)
  if (pathnameWithoutLocale === '') pathnameWithoutLocale = '/'
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {navLinks.map((el, index) => (
        <Box key={index} sx={{ position: 'relative' }}>
          <CircleIcon
            sx={{
              position: 'absolute',
              left: -40,
              top: 0,
              bottom: 0,
              my: 'auto',
              color: 'theorieBlue.main',
              display: pathnameWithoutLocale === el.href ? 'block' : 'none',
            }}
          />
          <Link
            sx={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            component={NextLink}
            href={el.href}
            onClick={() => toggleMenu(false)}
          >
            <Typography variant='h3' component='span'>
              {el.label}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  )
}

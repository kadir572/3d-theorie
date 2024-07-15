import Box from '@mui/material/Box'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ToTopButton from '../buttons/ToTopButton'
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import { footerPrimaryLinks, footerSecondaryLinks } from '@/lib/links/footer'
import Typography from '@mui/material/Typography'

export default function Footer() {
  return (
    <Box component='footer'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          bgcolor: 'theorieBlue.main',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          px: 6,
          pt: 2,
          pb: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ToTopButton />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
            }}
          >
            {footerPrimaryLinks.map((el, index) => (
              <Link
                component={NextLink}
                href={el.href}
                key={index}
                sx={{ color: 'white', textDecoration: 'none' }}
              >
                <Typography variant='h4' component='span'>
                  {el.label}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: 'flex-end',
              flexGrow: 1,
            }}
          >
            {footerSecondaryLinks.map((el, index) => (
              <Link
                component={NextLink}
                key={index}
                href={el.href}
                target={el.openInNewTab ? '_blank' : '_self'}
                sx={{ color: 'white' }}
              >
                <Typography variant='body1' component='span'>
                  {el.label}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white',
            mt: 2,
          }}
        >
          <Typography fontWeight={300}>
            &copy;{` ${new Date().getFullYear()} 3D-Theorie`}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
            <Typography fontWeight={300}>Ein Product von</Typography>
            <Link
              component={NextLink}
              href={'https://blyze.ch'}
              color='inherit'
              sx={{ textDecoration: 'none' }}
              target='_blank'
            >
              <Typography fontWeight={600}>&nbsp;Blyze Zürich</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

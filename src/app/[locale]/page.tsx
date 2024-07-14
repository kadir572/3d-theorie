import Box from '@mui/material/Box'
import Image from 'next/image'
import HeroImage from '@/assets/images/hero.jpg'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import Button from '@mui/material/Button'

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box
        sx={{
          position: 'relative',
          height: { xs: 'calc(100vh - 128px)', md: 'calc(100vh - 80px)' },
          // borderTopLeftRadius: { xs: 0, md: 12 },
          // borderTopRightRadius: { xs: 0, md: 12 },
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          overflow: 'hidden',
        }}
      >
        <Image
          src={HeroImage}
          alt='Hero Banner (Person im öffentlichen Verkehr am Telefon)'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          style={{ position: 'absolute' }}
        />
        <Box
          sx={{
            position: 'absolute',
            maxWidth: { xs: '85%', md: '50%' },
            bottom: 24,
            left: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: 2,
              px: 2,
              pt: 1,
              pb: 2,
              width: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              gap: 0.5,
            }}
          >
            <Typography
              sx={{ textTransform: 'uppercase' }}
              variant='h4'
              fontWeight='600'
            >
              Lerne für die Theorieprüfung ohne
            </Typography>
            <Typography
              sx={{
                textDecoration: 'underline',
                color: 'theorieBlue.main',
                textTransform: 'uppercase',
              }}
              variant='h3'
              fontWeight='600'
            >
              Ansch*ss!
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: 2,
              px: 2,
              py: 1,
              width: 'fit-content',
            }}
          >
            <Typography variant='h4' fontWeight='600'>
              B / A / A1
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant='h6'>
            Prüfung ohne Stress, dann scroll weiter
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <KeyboardArrowDownIcon />
        </Box>
      </Box>
      <Box
        sx={{
          px: { xs: 2, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          my: 4,
        }}
      >
        <Typography variant='h6' sx={{ px: 2 }}>
          Keine Motivation für die Theorieprüfung zu lernen?
        </Typography>
        <Divider variant='fullWidth' sx={{ bgcolor: 'black' }} />
        <Typography variant='h6' sx={{ px: 2 }}>
          Du lernst nur die Bilder auswendig, ohne zu verstehen, was genau
          gemeint ist?
        </Typography>
        <Divider variant='fullWidth' sx={{ bgcolor: 'black' }} />
        <Typography variant='h6' sx={{ px: 2 }}>
          Du hast Angst, die Theorieprüfung nicht zu bestehen?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link
            href='/'
            component={NextLink}
            color='primary'
            sx={{
              color: '#000',
              borderColor: '#000',
              border: 1,
              borderRadius: 1,
              px: 1,
              py: 0.5,
              textDecoration: 'none',
              textAlign: 'center',
              textTransform: 'uppercase',
              width: 'fit-content',
            }}
          >
            <Typography variant='h6'>Unsere Lösung</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

import Box from '@mui/material/Box'
import Image from 'next/image'
import HeroImage from '@/assets/images/hero.jpg'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box
        sx={{
          position: 'relative',
          height: { xs: 'calc(100vh - 128px)', md: 'calc(100vh - 80px)' },
          borderRadius: 2,
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
            bottom: 20,
            left: 20,
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
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography fontWeight='600'>
          Prüfung ohne Stress, dann scroll weiter
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  )
}

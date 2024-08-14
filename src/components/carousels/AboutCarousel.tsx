'use client'

import LightbulbIcon from '@mui/icons-material/Lightbulb'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CodeIcon from '@mui/icons-material/Code'
import CampaignIcon from '@mui/icons-material/Campaign'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import Carousel from 'react-material-ui-carousel'

const slides: { title: string; icon: JSX.Element; description: string[] }[] = [
  {
    title: 'Vorentwicklung',
    icon: <LightbulbIcon sx={{ height: '100%', fontSize: 150 }} />,
    description: [
      'Prototyp-Entwicklung',
      'Benutzeroberfläche kreieren',
      'Benutzerfeedback einholen',
    ],
  },
  {
    title: 'Finanzierung',
    icon: <AccountBalanceIcon sx={{ height: '100%', fontSize: 150 }} />,
    description: ['Sponsoren und Investoren suchen'],
  },
  {
    title: 'Entwicklung',
    icon: <CodeIcon sx={{ height: '100%', fontSize: 150 }} />,
    description: [
      'Finalisierung des Spiels',
      'Zusätzliche Meilensteine erreichen',
    ],
  },
  {
    title: 'Marketing',
    icon: <CampaignIcon sx={{ height: '100%', fontSize: 150 }} />,
    description: ['Markteinführung', 'ADS starten'],
  },
]

export default function AboutCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const handleSlideChange = (index: number) => setActiveIndex(index)
  return (
    <Carousel
      sx={{
        width: '100%',
        maxWidth: '500px',
        height: '350px',
        py: 1,
        display: 'flex',
        flexDirection: 'column',
        // border: 1,
        borderRadius: 2,
        boxShadow: 5,
      }}
      autoPlay={false}
      animation='slide'
      indicators={true}
      navButtonsAlwaysVisible
      onChange={index => handleSlideChange(Number(index))}
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            flexGrow: 1,
            height: '310px',
            py: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h5'>{slide.title}</Typography>
          <Box sx={{ flexGrow: 1 }}>{slide.icon}</Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {slide.description.map((d, i) => (
              <Typography variant='subtitle1' key={i}>
                {d}
              </Typography>
            ))}
          </Box>
          {/* <Grid
            container
            spacing={2}
            justifyContent='center'
            alignItems='center'
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  backgroundColor: 'primary.main',
                  borderRadius: '2',
                }}
              >
                {slide.icon}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6'>{slide.title}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body1'>{slide.description}</Typography>
            </Grid>
          </Grid> */}
        </Box>
      ))}
    </Carousel>
  )
}

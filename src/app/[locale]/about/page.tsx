import AboutCarousel from '@/components/carousels/AboutCarousel'
import PageLayout from '@/components/layouts/PageLayout'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CarImage from '@/assets/images/car.png'
import CarWireframeImage from '@/assets/images/car-wireframe.png'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <PageLayout title='Über uns'>
      <Grid container rowSpacing={4} columnSpacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant='subtitle1'>
            Aktuell besteht das Problem, dass die bisherigen Lernmethoden für
            die Autotheorieprüfung veraltet sind. Es reicht, dass man die Fragen
            auswendig lernt, um zu bestehen. Die meisten Schüler verstehen
            nicht, was genau mit dieser Frage gemeint ist und wieso diese
            Vorschriften so wichtig sind. Dies kann und wird im Strassenalltag
            zu gefährlichen Situationen führen. Kein Wunder, dass die
            Unfallquote bei Neulenkern so hoch sind.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Image src={CarImage} alt={'Car Image'} width={500} height={500} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ order: { md: 2 } }}>
          <Typography variant='subtitle1'>
            Das Entwicklungsteam von Blyze hat genug. Wir alle haben die
            Autotheorieprüfung absolviert und kennen diese Probleme. Deshalb
            erschufen wir 3D-Theorie. Durch eine interaktive Lernmethode
            erschaffen wir ein besseres Verständnis der Verkehrstheorie und
            möchten so die Schweizer Strassen sicherer gestalten.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} sx={{ order: { md: 1 } }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Image
              src={CarWireframeImage}
              alt={'Car wireframe image'}
              width={500}
              height={500}
            />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography variant='h5' component='h2'>
          Phasenplan
        </Typography>
        <AboutCarousel />
      </Box>
    </PageLayout>
  )
}

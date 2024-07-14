import PageLayout from '@/components/layouts/PageLayout'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'

export default function ImprintPage() {
  return (
    <PageLayout title='Impressum'>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant='h6' component='h2'>
          Blyze Zürich
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography>c/o SAE Institute</Typography>
          <Typography>Buckhauserstrasse 24, 8048 Zürich</Typography>
          <Link href={'https://blyze.ch'} target='_blank' component={NextLink}>
            blyze.ch
          </Link>
          <Link component={NextLink} href={'mailto:info@blyze.ch'}>
            info@blyze.ch
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant='h5' component='h3'>
          Handelsregistereintrag
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography>
            Handelsregistereintrag: Eingetragen im Handelsregister.
          </Typography>
          <Typography>
            Registergericht: Handelsregsteramt Kanton Zürich
          </Typography>
          <Typography>Registernummer: CH-123.4.567.891-0</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant='h5' component='h3'>
          Umsatzsteuer
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography>
            Umsatzsteuer-Identifikationsnummer: CHE-123.456.789 MWST.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant='h5' component='h3'>
          Aufsichtsbehörde
        </Typography>
        <Typography>Schweizer Bundesgericht</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant='h5' component='h3'>
          Berufshaftpflichtversicherung
        </Typography>
        <Typography>AXA Schweiz</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant='h5' component='h3'>
          Urheberrechtshinweise
        </Typography>
        <Typography>
          Die Inhalte dieser Webseite unterliegen dem Urheberrecht von Pixel
          Vista Studios GmbH. Die Verwendung von Texten, Grafiken, Videos und
          Bildern bedarf der schriftlichen Genehmigung. Für den Inhalt
          verlinkter Seiten sind wir nicht verantwortlich. Alle Rechte
          vorbehalten.
        </Typography>
      </Box>
    </PageLayout>
  )
}

import AboutCarousel from '@/components/carousels/AboutCarousel'
import PageLayout from '@/components/layouts/PageLayout'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function ContactPage() {
  return (
    <PageLayout title='Kontakt'>
      <Grid container rowSpacing={4} columnSpacing={12}>
        <Grid item xs={12} md={6}>
          <Typography variant='h6'>
            Hast du Fragen oder benötigst Hilfe? Dann fülle das folgende
            Kontaktformular aus und wir melden uns schnellstmöglich bei dir.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Name'
                  name='name'
                  variant='outlined'
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='E-Mail'
                  name='email'
                  variant='outlined'
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Telefon'
                  name='phone'
                  variant='outlined'
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Grund'
                  name='reason'
                  variant='outlined'
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Nachricht'
                  name='message'
                  variant='outlined'
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type='submit'
                  variant='outlined'
                  color='primary'
                  fullWidth
                >
                  Senden
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </PageLayout>
  )
}

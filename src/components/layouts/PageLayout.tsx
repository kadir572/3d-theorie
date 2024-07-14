import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

type Props = {
  children: React.ReactNode
  title: string
}

export default function PageLayout({ children, title }: Props) {
  return (
    <Box
      sx={{
        mt: { xs: 12, md: 12 },
        px: { xs: 0, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      <Divider variant='fullWidth' sx={{ bgcolor: 'black', mx: 2 }} />
      <Box sx={{ px: 2, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Typography variant='h4' component='h1' fontWeight='600'>
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  )
}

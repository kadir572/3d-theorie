import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/partials/Header'
import Footer from '@/components/partials/Footer'
import { Analytics } from '@vercel/analytics/react'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Opal',
  description: 'Opal',
}

type Props = {
  children: React.ReactNode
  params: any
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            maxWidth: 1920,
            padding: 0,
            position: 'relative',
            // bgcolor: 'black',
          }}
        >
          <Header />
          <Toolbar />
          <Box sx={{ flexGrow: 1, px: 2, py: 1 }}>{children}</Box>
          <Footer />
        </Container>
        <Analytics />
      </body>
    </html>
  )
}

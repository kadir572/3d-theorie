import theme from '@/theme'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { CssBaseline, ThemeProvider } from '@mui/material'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

'use client'

import CloseMenuButton from '@/components/buttons/CloseMenuButton'
import { navLinks } from '@/lib/links/navigation'
import { useMobileMenuStore } from '@/lib/store/zustand'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Link from '@mui/material/Link'
import Slide from '@mui/material/Slide'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import CircleIcon from '@mui/icons-material/Circle'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import MobileLinks from './links/MobileLinks'

export default function MobileMenu() {
  const pathname = usePathname()
  let pathnameWithoutLocale = pathname.substring(3)
  if (pathnameWithoutLocale === '') pathnameWithoutLocale = '/'
  const { isOpen, toggleMenu } = useMobileMenuStore()

  const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: '0px',
      width: '100%',
      height: '100vh',
      margin: '0',
      textAlign: 'center',
      transform: 'scale(0)',
      animation: 'pop 0.3s forwards',
      backgroundColor: 'black',
      color: 'white',
      transformOrigin: 'top right',
    },
    '@keyframes pop': {
      '0%': {
        opacity: 0,
        transform: 'scale(0.5)',
      },
      '100%': {
        opacity: 1,
        transform: 'scale(1)',
      },
    },
  }))

  const ContentWrapper = styled('div')({
    opacity: 0,
    animation: 'fadeIn 0.3s forwards 0.3s',
    '@keyframes fadeIn': {
      '0%': {
        opacity: 0,
        transform: 'scale(0.8)',
      },
      '100%': {
        opacity: 1,
        transform: 'scale(1)',
      },
    },
  })

  return (
    // <Drawer
    //   anchor='right'
    //   open={isOpen}
    //   onClose={() => toggleMenu(false)}
    //   transitionDuration={{ enter: 500, exit: 500 }}
    //   PaperProps={{
    //     style: {
    //       width: '100%',
    //       height: '100%',
    //       backgroundColor: 'black',
    //       color: 'white',
    //       display: 'flex',
    //       flexDirection: 'column',
    //       gap: 96,
    //     },
    //   }}
    // >
    //   <Toolbar
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //       // backgroundColor: 'transparent',
    //     }}
    //   >
    //     <Typography variant='h4' component='span'>
    //       3D-Theorie
    //     </Typography>
    //     <CloseMenuButton />
    //   </Toolbar>
    //   <Box
    //     sx={{
    //       px: 2,
    //       py: 1,
    //       flexGrow: 1,
    //       display: 'flex',
    //       justifyContent: 'center',
    //     }}
    //   >
    //     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    //       {navLinks.map((el, index) => (
    //         <Box key={index} sx={{ position: 'relative' }}>
    //           <CircleIcon
    //             sx={{
    //               position: 'absolute',
    //               left: -40,
    //               top: 0,
    //               bottom: 0,
    //               my: 'auto',
    //               color: 'theorieBlue.main',
    //               display: pathnameWithoutLocale === el.href ? 'block' : 'none',
    //             }}
    //           />
    //           <Link
    //             sx={{
    //               textDecoration: 'none',
    //               color: 'inherit',
    //             }}
    //             component={NextLink}
    //             href={el.href}
    //           >
    //             <Typography variant='h3' component='span'>
    //               {el.label}
    //             </Typography>
    //           </Link>
    //         </Box>
    //       ))}
    //     </Box>
    //   </Box>
    // </Drawer>
    <StyledDialog
      sx={{ position: 'relative' }}
      open={isOpen}
      onClose={() => toggleMenu(false)}
    >
      <DialogContent>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            // backgroundColor: 'transparent',
          }}
        >
          <Typography variant='h4' component='span'>
            3D-Theorie
          </Typography>
          <CloseMenuButton />
        </Toolbar>
        <ContentWrapper>
          <Box
            sx={{
              mt: 12,
              px: 2,
              py: 1,
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <MobileLinks />
          </Box>
        </ContentWrapper>
      </DialogContent>
    </StyledDialog>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/partials/Header'
import Footer from '@/components/partials/Footer'
import { Analytics } from '@vercel/analytics/react'

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
        <div className='w-full mx-auto relative min-h-screen'>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}

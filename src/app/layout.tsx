import { Providers } from '@/app/Providers'
import { Banner } from '@/app/components/Banner'
import Nav from '@/app/components/Nav'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Linux Learner',
  description: 'Sitio web para aprender Linux',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="es">
      <link rel="icon" href="/icon.png" sizes="any" />
      <body className={inter.className}>
        <Providers>
          <section className="min-h-screen bg-white pb-8 dark:bg-[#121212] dark:text-white">
            <Banner />
            <Nav />
            <section className="bg-white px-8 dark:bg-[#121212] dark:text-white">
              {children}
            </section>
          </section>
        </Providers>
      </body>
    </html>
  )
}

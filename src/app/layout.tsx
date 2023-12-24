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
          <section className="min-h-screen bg-[#fffffe] pb-8 text-black red-light dark:bg-[#121212] dark:text-[#d4d4d4] dark:red-dark">
            <Banner />
            <Nav />
            <section className="px-6 red-light dark:red-dark">
              {children}
            </section>
          </section>
        </Providers>
      </body>
    </html>
  )
}

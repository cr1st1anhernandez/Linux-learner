import { Providers } from '@/app/Providers'
import BackToTop from '@/app/components/BackToTop'
import { Banner } from '@/app/components/Banner'
import Nav from '@/app/components/Nav'
import { ClerkProvider } from '@clerk/nextjs'
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
      <link rel="icon" href="/icon.svg" sizes="any" />
      <body className={inter.className}>
        <ClerkProvider
          appearance={{
            variables: { colorPrimary: '#e11d48' },
          }}
        >
          <Providers>
            <div className="min-h-screen bg-[#fffffe] pb-8 text-[#101010] red-light dark:bg-[#101010] dark:text-[#d4d4d4] dark:red-dark">
              <Banner />
              <Nav />
              <div className="px-6 red-light dark:red-dark">{children}</div>
              <BackToTop />
            </div>
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  )
}

'use client'
import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export default function Page(): JSX.Element {
  const { theme } = useTheme()
  return (
    <section className="flex justify-center pt-8">
      <SignUp
        appearance={{
          baseTheme: theme === 'dark' ? dark : undefined,
        }}
      />
    </section>
  )
}

'use client'
import { ArrowUp } from '@/app/icons/ArrowUp'
import { useEffect, useState } from 'react'

export default function BackToTop(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      const scrolled = window.scrollY > 0
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {isScrolled && (
        <button
          className="fixed bottom-2 right-8 z-50 rounded-full bg-rose-600 p-2 text-white shadow-sm"
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <ArrowUp />
        </button>
      )}
    </>
  )
}

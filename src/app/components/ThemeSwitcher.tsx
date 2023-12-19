'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdSunny } from 'react-icons/md'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'

export function ThemeSwitcher(): JSX.Element {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <div className="flex items-center">
      {theme === 'light' ? (
        <button
          className="text-red-400"
          onClick={() => {
            setTheme('dark')
          }}
        >
          <WiMoonAltFirstQuarter className="h-6 w-6" />
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme('light')
          }}
        >
          <MdSunny className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

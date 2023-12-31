'use client'
import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
export function ThemeSwitcher(): JSX.Element {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <>
      {theme === 'light' ? (
        <button
          className=""
          onClick={() => {
            setTheme('dark')
          }}
        >
          <Icon className="size-6" icon="line-md:moon-alt-loop" />
        </button>
      ) : (
        <button
          className="text-white"
          onClick={() => {
            setTheme('light')
          }}
        >
          <Icon className="size-6" icon="line-md:sun-rising-filled-loop" />
        </button>
      )}
    </>
  )
}

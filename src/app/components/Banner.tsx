'use client'
import { Close } from '@/app/icons/Close'
import { Kofi } from '@/app/icons/Kofi'
import clsx from 'clsx'
import { useState } from 'react'
export const Banner = (): JSX.Element => {
  const [isActive, setIsActive] = useState(true)

  const handleActive = (): void => {
    setIsActive(!isActive)
  }
  return (
    <div
      className={clsx(
        'sticky flex h-8 w-full items-center justify-between bg-rose-600 font-semibold text-white',
        {
          hidden: !isActive,
          flex: isActive,
        },
      )}
    >
      <div></div>
      <a
        href="https://ko-fi.com/cristianneftalihernandezramirez"
        rel="noreferrer"
        target="_blank"
        className="hover:cursor-pointer"
      >
        Puedes apoyar el proyecto en Ko-fi
        <Kofi className="ml-1 inline" />
      </a>
      <Close
        className="h-auto w-6 cursor-pointer justify-self-end"
        onClick={handleActive}
      />
    </div>
  )
}

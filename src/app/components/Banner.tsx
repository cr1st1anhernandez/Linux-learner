'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { SiKofi } from 'react-icons/si'
export const Banner = (): JSX.Element => {
  const [isActive, setIsActive] = useState(true)

  const handleActive = (): void => {
    setIsActive(!isActive)
  }
  return (
    <div
      className={clsx(
        'sticky flex h-8 w-full items-center justify-between bg-red-500 font-semibold text-white',
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
        <SiKofi className="ml-1 inline" />
      </a>
      <IoCloseOutline
        className="h-auto w-6 cursor-pointer justify-self-end"
        onClick={handleActive}
      />
    </div>
  )
}

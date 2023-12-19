'use client'
import Link from 'next/link'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
interface NavigateButtonProps {
  text: string
  route: string
}
export const NavigateButtton = ({
  text,
  route,
}: NavigateButtonProps): JSX.Element => {
  return (
    <Link
      href={route}
      className="
        flex w-fit items-center justify-between gap-4 rounded-md bg-red-500 
      px-4 text-lg text-white shadow-sm shadow-zinc-500 transition-all duration-300 ease-in-out hover:bg-red-600 focus:bg-red-600 active:bg-red-600 dark:shadow-black
    "
    >
      {text === 'anterior' ? (
        <FaArrowLeftLong className="h-auto w-8" />
      ) : text === 'siguiente' ? (
        <FaArrowRightLong className="h-auto w-8" />
      ) : text === 'Iniciar' ? (
        <p className="flex gap-2 font-bold">
          {text}
          <FaArrowRightLong className="h-auto w-6" />
        </p>
      ) : null}
    </Link>
  )
}

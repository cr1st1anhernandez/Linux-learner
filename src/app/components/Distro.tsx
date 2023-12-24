import { type DistroProps } from '@/app/interfaces/intefaces'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export function Distro({
  name,
  text,
  icon,
  url,
  color,
  colorHover,
}: DistroProps): JSX.Element {
  return (
    <Link
      href={url}
      rel="noreferrer"
      target="_blank"
      className={`flex flex-col items-center justify-between gap-5 rounded-xl shadow-md shadow-zinc-300 dark:shadow-black ${color} px-10 py-10 text-white transition-all duration-300 ease-in-out 2xl:py-5 ${colorHover} 2xl:flex-row`}
    >
      <article>
        <h2>{name}</h2>
        <p>{text}</p>
      </article>
      <Icon icon={icon} className="h-20 w-20 xl:h-40 xl:w-40" />
    </Link>
  )
}

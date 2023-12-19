'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { VscDebugStart } from 'react-icons/vsc'

export default function Home(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = (): void => {
    setIsLoaded(!isLoaded)
  }

  return (
    <section className="mx-auto flex flex-col items-center justify-between pt-12 red-light dark:red-dark md:w-5/6 xl:flex-row">
      <div className="flex h-fit flex-col justify-center gap-2 sm:gap-8 xl:w-1/2">
        <h1 className=" text-5xl font-bold  sm:text-7xl lg:text-8xl xl:text-6xl 2xl:text-8xl">
          ¡Descubre el poder de linux desde cero!
        </h1>
        <p className="text-left text-zinc-500">
          Una herramienta que proporciona una base sólida para entrar al mundo
          de Linux desarrollando una sólida comprensión de Linux en general.
          También le ayudará a descubrir la distribución de linux que se ajuste
          a sus necesidades, evitando el distro hopping constante.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="clase1-introduccion-a-linux"
            className="col-span-2 flex items-center justify-center rounded-md bg-red-500 py-2 text-lg font-bold text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-red-600"
          >
            <span>Empezar</span>
            <VscDebugStart className="h-auto w-6" />
          </Link>
          <Link
            href="https://github.com/cr1st1anhernandez/linux-learner"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 flex items-center justify-center gap-1 rounded-md bg-zinc-800 py-2 text-lg font-bold text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-zinc-900 xl:col-span-1"
          >
            <span>Github</span>
            <FaGithub className="h-auto w-6" />
          </Link>
          <Link
            href="/sign-in"
            className="col-span-2 flex items-center justify-center gap-1 rounded-md border-2 border-black py-2 text-lg font-bold shadow-sm transition-all duration-300 ease-in-out hover:bg-zinc-100 dark:border-zinc-100 dark:bg-zinc-100 dark:text-black dark:opacity-90 dark:hover:opacity-100 xl:col-span-1"
          >
            <span>Iniciar Sesión</span>
            <FiLogIn className="h-auto w-6" />
          </Link>
        </div>
      </div>
      <div className="flex w-full items-center justify-center md:w-2/3 xl:w-1/2">
        <Image
          src="/images/principalImage.svg"
          width={800}
          height={800}
          onLoad={handleLoad}
          alt="Imagen principal"
        />
      </div>
    </section>
  )
}

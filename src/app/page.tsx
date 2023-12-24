'use client'
import { Button, Link } from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { HiMiniBeaker } from 'react-icons/hi2'

export default function Home(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = (): void => {
    setIsLoaded(!isLoaded)
  }

  return (
    <section className="mx-auto flex flex-col items-center justify-between pt-12 red-light dark:red-dark md:w-5/6 xl:flex-row">
      <article className="flex h-fit flex-col justify-center gap-2 sm:gap-8 xl:w-1/2">
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
          <Button
            className="col-span-2 font-bold"
            href="clase1-introduccion-a-linux"
            as={Link}
            showAnchorIcon
            anchorIcon={<HiMiniBeaker />}
            color="primary"
            variant="solid"
          >
            Empezar
          </Button>
          <Button
            className="font-bold"
            href="https://github.com/cr1st1anhernandez/linux-learner"
            as={Link}
            showAnchorIcon
            anchorIcon={<FaGithub />}
            variant="solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Button>
          <Button
            className="font-bold"
            href="/sign-in"
            as={Link}
            showAnchorIcon
            anchorIcon={<FiLogIn />}
            variant="solid"
          >
            Iniciar sesión
          </Button>
        </div>
      </article>
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

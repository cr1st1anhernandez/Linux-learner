'use client'
import Distros from '@/app/components/Distros'
import Question1 from '@/app/components/Questions'
import Title from '@/app/components/Title'

export default function page(): JSX.Element {
  return (
    <section className="flex flex-col gap-4">
      <Title
        title="Introducción"
        previousRoute="/"
        nextRoute="/clase2-instalacion-de-ubuntu"
      />
      <p className="text-pretty">
        Linux es el rebelde gratuito y flexible sistema operativo de código
        abierto que se encuentra en servidores, supercomputadoras, dispositivos
        móviles y más. Su núcleo, el kernel de Linux, late como el corazón del
        sistema, gracias a la colaboración global de desarrolladores, dando
        origen a diversas{' '}
        <span className="font-bold text-rose-600">
          distribuciones de Linux (sabores de linux).
        </span>{' '}
        En nuestro viaje{' '}
        <span className="font-bold text-rose-600">elegiremos Ubuntu </span>
        gracias a su facilidad de uso.
      </p>
      <h3>Principales Distribuciones de Linux</h3>
      <section className="flex min-h-[38rem] flex-col gap-5 2xl:flex-row">
        <section className="w-full 2xl:w-3/4">
          <Distros />
        </section>
        <aside className="w-full 2xl:w-1/4">
          <Question1 />
        </aside>
      </section>
    </section>
  )
}

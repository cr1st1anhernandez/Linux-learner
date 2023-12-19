import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useState } from 'react'
interface DistroProps {
  name: string
  text: string
  icon: string
  url: string
  color: string
  colorHover: string
}

export function Distro({
  name,
  text,
  icon,
  url,
  color,
  colorHover,
}: DistroProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = (): void => {
    setIsLoaded(!isLoaded)
  }

  return (
    <Link
      href={url}
      rel="noreferrer"
      target="_blank"
      className={`flex flex-col items-center justify-between gap-5 rounded-md ${color} px-10 py-10 text-white transition-all duration-300 ease-in-out 2xl:py-5 ${colorHover} 2xl:flex-row`}
    >
      <article>
        <h2>{name}</h2>
        <p>{text}</p>
      </article>
      <Icon
        icon={icon}
        className="h-20 w-20 xl:h-40 xl:w-40"
        onLoad={handleLoad}
      />
    </Link>
  )
}

export function Redhat(): JSX.Element {
  return (
    <Distro
      name="RedHat"
      text="Es la distro empresarial más importante aunque no es gratis."
      icon="devicon:redhat"
      url="https://www.redhat.com/es"
      color="bg-red-600"
      colorHover="hover:bg-red-700"
    />
  )
}

export function ElementaryOs(): JSX.Element {
  return (
    <Distro
      name="Elementary Os"
      text="Un sustituto hecho a conciencia, potente y ético para Windows y macOS."
      icon="simple-icons:elementary"
      url="https://elementary.io/es/"
      color="bg-zinc-800"
      colorHover="hover:bg-zinc-900"
    />
  )
}

export function Suse(): JSX.Element {
  return (
    <Distro
      name="Suse"
      text="Ofrece soluciones de servidores y sistemas embebidos para empresas."
      icon="fa6-brands:suse"
      url="https://www.suse.com/es-es/"
      color="bg-green-800"
      colorHover="hover:bg-green-900"
    />
  )
}

export function CentOs(): JSX.Element {
  return (
    <Distro
      name="CentOs"
      text="Es un fork gratuito muy utilizado de red Hat conocido como CentOS."
      icon="logos:centos-icon"
      url="https://www.centos.org/"
      color="bg-amber-400"
      colorHover="hover:bg-amber-500"
    />
  )
}

export function Debian(): JSX.Element {
  return (
    <Distro
      name="Debian"
      text="Es una de las distros más antiguas y estables de Linux. Muy respetada."
      icon="logos:debian"
      url="https://www.debian.org/index.es.html"
      color="bg-slate-600"
      colorHover="hover:bg-slate-700"
    />
  )
}

export function Kali(): JSX.Element {
  return (
    <Distro
      name="Kali"
      text="Basada en Debian. Ofrece herramientas para auditoría y seguridad informática."
      icon="simple-icons:kalilinux"
      url="https://www.kali.org"
      color="bg-red-600"
      colorHover="hover:bg-red-700"
    />
  )
}

export function Ubuntu(): JSX.Element {
  return (
    <Distro
      name="Ubuntu"
      text="Basada en Debian, es la distro más famosa de Linux. Muy popular."
      icon="mdi:ubuntu"
      url="https://www.ubuntu.com"
      color="bg-orange-600"
      colorHover="hover:bg-orange-700"
    />
  )
}

export function Fedora(): JSX.Element {
  return (
    <Distro
      name="Fedora"
      text="Para el usuario basada en red Hat pero desarrollada por la comunidad."
      icon="simple-icons:fedora"
      url="https://fedoraproject.org/es/"
      color="bg-red-800"
      colorHover="hover:bg-red-900"
    />
  )
}

export function LinuxMint(): JSX.Element {
  return (
    <Distro
      name="Linux Mint"
      text="Basada en Ubuntu, intenta dar una experiencia cercana a Windows."
      icon="mdi:linux-mint"
      url="https://www.linuxmint.com"
      color="bg-green-600"
      colorHover="hover:bg-green-700"
    />
  )
}

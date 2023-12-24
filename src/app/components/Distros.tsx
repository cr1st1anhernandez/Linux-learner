import { Distro } from './Distro'
const distros = [
  {
    name: 'Red Hat',
    text: 'Es una de las distros más antiguas y estables de Linux. Muy respetada.',
    icon: 'devicon:redhat',
    url: 'https://www.redhat.com/es',
    color: 'bg-red-600',
    colorHover: 'hover:bg-red-700',
  },
  {
    name: 'Suse',
    text: 'Es una de las distros más antiguas y estables de Linux. Muy respetada.',
    icon: 'fa6-brands:suse',
    url: 'https://www.suse.com/es-es/',
    color: 'bg-green-600',
    colorHover: 'hover:bg-green-700',
  },
  {
    name: 'CentOs',
    text: 'Es un fork gratuito muy utilizado de red Hat conocido como CentOS.',
    icon: 'logos:centos-icon',
    url: 'https://www.centos.org/',
    color: 'bg-amber-400',
    colorHover: 'hover:bg-amber-500',
  },
  {
    name: 'Debian',
    text: 'Es una de las distros más antiguas y estables de Linux. Muy respetada.',
    icon: 'logos:debian',
    url: 'https://www.debian.org/index.es.html',
    color: 'bg-slate-600',
    colorHover: 'hover:bg-slate-700',
  },
  {
    name: 'Kali',
    text: 'Basada en Debian. Ofrece herramientas para auditoría y seguridad informática.',
    icon: 'simple-icons:kalilinux',
    url: 'https://www.kali.org',
    color: 'bg-purple-600',
    colorHover: 'hover:bg-purple-700',
  },
  {
    name: 'Ubuntu',
    text: 'Basada en Debian, es la distro más famosa de Linux. Muy popular.',
    icon: 'mdi:ubuntu',
    url: 'https://www.ubuntu.com',
    color: 'bg-orange-600',
    colorHover: 'hover:bg-orange-700',
  },
  {
    name: 'Fedora',
    text: 'Basada en Debian, es la distro más famosa de Linux. Muy popular.',
    icon: 'logos:fedora',
    url: 'https://getfedora.org/es/',
    color: 'bg-blue-600',
    colorHover: 'hover:bg-blue-700',
  },
  {
    name: 'Linux Mint',
    text: 'Basada en Debian, es la distro más famosa de Linux. Muy popular.',
    icon: 'logos:linux-mint',
    url: 'https://linuxmint.com/',
    color: 'bg-green-600',
    colorHover: 'hover:bg-green-700',
  },
  {
    name: 'Elementary OS',
    text: 'Basada en Debian, es la distro más famosa de Linux. Muy popular.',
    icon: 'simple-icons:elementary',
    url: 'https://elementary.io/es/',
    color: 'bg-blue-600',
    colorHover: 'hover:bg-blue-700',
  },
]

export default function Distros(): JSX.Element {
  return (
    <section className="grid gap-5 md:grid-cols-auto-fill-20 2xl:min-h-[38rem]">
      {distros.map((distro, index) => (
        <Distro
          key={index}
          name={distro.name}
          text={distro.text}
          icon={distro.icon}
          url={distro.url}
          color={distro.color}
          colorHover={distro.colorHover}
        />
      ))}
    </section>
  )
}

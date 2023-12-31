import { ReactComponent as CentOs } from '@/app/icons/CentOs'
import { ReactComponent as Debian } from '@/app/icons/Debian'
import { ReactComponent as Elementary } from '@/app/icons/Elementary'
import { ReactComponent as Fedora } from '@/app/icons/Fedora'
import { ReactComponent as Kali } from '@/app/icons/Kali'
import { ReactComponent as LinuxMint } from '@/app/icons/LinuxMint'
import { RedHat } from '@/app/icons/RedHat'
import { Suse } from '@/app/icons/Suse'
import { Ubuntu } from '@/app/icons/Ubuntu'
import { Distro } from './Distro'

const icons = {
  redhat: <RedHat />,
  suse: <Suse />,
  centOs: <CentOs />,
  debian: <Debian />,
  kali: <Kali />,
  ubuntu: <Ubuntu />,
  fedora: <Fedora />,
  linuxMint: <LinuxMint />,
  elementary: <Elementary />,
}

const distros = [
  {
    name: 'Red Hat',
    text: 'Es una de las distros más antiguas y estables de Linux. Muy respetada.',
    icon: icons.redhat,
    url: 'https://www.redhat.com/es',
  },
  {
    name: 'Suse',
    text: 'Es una de las distros más antiguas y estables de Linux. Muy respetada.',
    icon: icons.suse,
    url: 'https://www.suse.com/es-es/',
  },
  {
    name: 'CentOs',
    text: 'Es un fork gratuito muy utilizado de red Hat conocido como CentOS.',
    icon: icons.centOs,
    url: 'https://www.centos.org/',
  },
  {
    name: 'Debian',
    text: 'Es una de las distros más antiguas y estables de Linux. Muy respetada.',
    icon: icons.debian,
    url: 'https://www.debian.org/index.es.html',
  },
  {
    name: 'Kali',
    text: 'Basada en Debian. Ofrece herramientas para auditoría y seguridad informática.',
    icon: icons.kali,
    url: 'https://www.kali.org',
  },
  {
    name: 'Ubuntu',
    text: 'Basada en Debian, es la distro más famosa de Linux. Muy popular.',
    icon: icons.ubuntu,
    url: 'https://www.ubuntu.com',
  },
  {
    name: 'Fedora',
    text: 'Basada en Debian, es la distro más famosa de Linux. Muy popular.',
    icon: icons.fedora,
    url: 'https://getfedora.org/es/',
  },
  {
    name: 'Linux Mint',
    text: 'Basada en Debian, es la distro más famosa de Linux. Muy popular.',
    icon: icons.linuxMint,
    url: 'https://linuxmint.com/',
  },
  {
    name: 'Elementary OS',
    text: 'Basada en Debian, es la distro más famosa de Linux. Muy popular.',
    icon: icons.elementary,
    url: 'https://elementary.io/es/',
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
        />
      ))}
    </section>
  )
}

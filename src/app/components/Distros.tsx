import {
  CentOs,
  Debian,
  ElementaryOs,
  Fedora,
  Kali,
  LinuxMint,
  Redhat,
  Suse,
  Ubuntu,
} from '@/app/components/Distro'

export default function Distros(): JSX.Element {
  return (
    <section className="grid gap-5 md:grid-cols-auto-fill-20 2xl:min-h-[38rem]">
      <Redhat />
      <Suse />
      <CentOs />
      <Debian />
      <Kali />
      <Ubuntu />
      <Fedora />
      <LinuxMint />
      <ElementaryOs />
    </section>
  )
}

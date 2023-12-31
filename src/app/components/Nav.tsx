'use client'
import { ThemeSwitcher } from '@/app/components/ThemeSwitcher'
import { ArrowDown } from '@/app/icons/ArrowDown'
import { Bash } from '@/app/icons/Bash'
import { Braces } from '@/app/icons/Braces'
import { Brush } from '@/app/icons/Brush'
import { Linux } from '@/app/icons/Linux'
import { Lock } from '@/app/icons/Lock'
import { Terminal } from '@/app/icons/Terminal'
import { Ubuntu } from '@/app/icons/Ubuntu'
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { useEffect, useState } from 'react'

export default function Nav(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const icons = {
    chevron: <ArrowDown />,
    brace: <Braces />,
    ubuntu: <Ubuntu />,
    terminal: <Terminal />,
    lock: <Lock />,
    brush: <Brush />,
    bash: <Bash />,
  }
  const menuItems = [
    {
      key: 'introduction',
      description:
        'Aprender lo que es linux y las diferentes distribuciones que existen.',
      startContent: icons.brace,
      href: '/clase1-introduccion-a-linux',
      title: 'Introducción a linux',
    },
    {
      key: 'installation',
      description:
        'Instalar uno de los sistemas operativos más populares en el mundo.',
      startContent: icons.ubuntu,
      href: '/clase2-instalacion-de-ubuntu',
      title: 'Instalación de ubuntu',
    },
    {
      key: 'terminal',
      description: 'Entender los conceptos básicos de la terminal.',
      startContent: icons.terminal,
      href: '/clase3-introduccion-a-la-terminal',
      title: 'Introducción a la terminal',
    },
    {
      key: 'permissions',
      description: 'Aprender a gestionar los permisos en linux.',
      startContent: icons.lock,
      href: '/clase4-permisos-en-linux',
      title: 'Permisos en linux',
    },
    {
      key: 'personalization',
      description: 'Dejar la terminal a tu gusto.',
      startContent: icons.brush,
      href: '/clase5-personalizacion-de-la-terminal',
      title: 'Personalización de la terminal',
    },
    {
      key: 'bash',
      description: 'Crear scripts para automatizar tareas en tu sistema.',
      startContent: icons.bash,
      href: '/clase6-introduccion-a-bash',
      title: 'Introducción a bash',
    },
  ]

  const Menu = (): JSX.Element => {
    return (
      <DropdownMenu
        aria-label="Linux Learner Content"
        className="w-[340px]"
        itemClasses={{
          base: 'gap-4',
        }}
      >
        {menuItems.map((item) => (
          <DropdownItem
            key={item.key}
            description={item.description}
            startContent={item.startContent}
            href={item.href}
            onPress={() => {
              setIsMenuOpen(false)
            }}
          >
            {item.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    )
  }

  useEffect(() => {
    const handleScroll = (): void => {
      const scrolled = window.scrollY > 0
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <Navbar
      className="red-light dark:red-dark"
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Link
            href="/"
            className="flex items-center gap-1 font-bold text-inherit"
            onPress={() => {
              setIsMenuOpen(false)
            }}
          >
            <Linux className="h-6 w-6" />
            LINUX LEARNER
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarItem className="hidden sm:flex">
          <Link color="foreground" href="/faqs" aria-current="page">
            FAQS
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link color="foreground" href="/comments" aria-current="page">
            COMENTARIOS
          </Link>
        </NavbarItem>
        <Dropdown className="red-light dark:red-dark">
          <NavbarItem className="hidden lg:flex">
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                variant="light"
              >
                CONTENIDO
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <Menu />
        </Dropdown>
        <NavbarItem className="hidden sm:flex">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <SignedOut>
            <SignInButton redirectUrl="/">
              <Button color="primary" variant="light">
                INICIAR SESIÓN
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <SignOutButton>
              <Button variant="light" color="primary">
                CERRAR SESIÓN
              </Button>
            </SignOutButton>
          </SignedIn>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <SignedIn>
            <UserButton afterSignOutUrl="/" signInUrl="/sign-in" />
          </SignedIn>
          <SignedOut>
            <SignUpButton redirectUrl="/">
              <Button color="primary" variant="flat">
                CREAR CUENTA
              </Button>
            </SignUpButton>
          </SignedOut>
        </NavbarItem>
        <NavbarItem className="flex sm:hidden">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu
        className={`
      pt-8 red-light dark:red-dark ${isScrolled ? 'pt-0' : ''}
      `}
      >
        <NavbarMenuItem className="flex lg:hidden">
          <Link
            onPress={() => {
              setIsMenuOpen(false)
            }}
            color="foreground"
            href="/faqs"
            aria-current="page"
          >
            FAQS
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex lg:hidden">
          <Link
            onPress={() => {
              setIsMenuOpen(false)
            }}
            color="foreground"
            href="/comments"
            aria-current="page"
          >
            COMENTARIOS
          </Link>
        </NavbarMenuItem>
        <Dropdown className="red-light dark:red-dark">
          <NavbarItem className="flex lg:hidden">
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                variant="light"
              >
                CONTENIDO
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <Menu />
        </Dropdown>
        <NavbarMenuItem className="flex cursor-pointer lg:hidden">
          <SignedOut>
            <SignInButton redirectUrl="/">
              <Link
                onPress={() => {
                  setIsMenuOpen(false)
                }}
              >
                INICIAR SESIÓN
              </Link>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <SignOutButton>
              <Link
                onPress={() => {
                  setIsMenuOpen(false)
                }}
              >
                CERRAR SESIÓN
              </Link>
            </SignOutButton>
          </SignedIn>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex cursor-pointer lg:hidden">
          <SignedIn>
            <UserButton afterSignOutUrl="/" signInUrl="/sign-in" />
          </SignedIn>
          <SignedOut>
            <SignUpButton redirectUrl="/">
              <Link
                onPress={() => {
                  setIsMenuOpen(false)
                }}
              >
                CREAR CUENTA
              </Link>
            </SignUpButton>
          </SignedOut>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

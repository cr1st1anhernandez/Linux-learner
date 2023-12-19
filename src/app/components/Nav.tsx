'use client'
import { ThemeSwitcher } from '@/app/components/ThemeSwitcher'
import { Icon } from '@iconify/react/dist/iconify.js'
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
import { useState } from 'react'
import { BsUbuntu } from 'react-icons/bs'
import { FaBrush } from 'react-icons/fa'
import { IoIosArrowDown, IoIosLock } from 'react-icons/io'
import { LuBraces } from 'react-icons/lu'
import { RiTerminalWindowLine } from 'react-icons/ri'
import { TbBrandPowershell } from 'react-icons/tb'

export default function Nav(): JSX.Element {
  const icons = {
    chevron: <IoIosArrowDown />,
    brace: <LuBraces />,
    ubuntu: <BsUbuntu />,
    terminal: <RiTerminalWindowLine />,
    lock: <IoIosLock />,
    brush: <FaBrush />,
    bash: <TbBrandPowershell />,
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ]

  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = (): void => {
    setIsLoaded(!isLoaded)
  }

  return (
    <Navbar
      className="red-light dark:red-dark"
      isBlurred={true}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            <Icon
              onLoad={handleLoad}
              icon="flat-color-icons:linux"
              className="h-auto w-8"
            />
            LINUX LEARNER
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/faqs" aria-current="page">
            FAQS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/comments" aria-current="page">
            COMENTARIOS
          </Link>
        </NavbarItem>
        <Dropdown className="red-light dark:red-dark">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                CONTENIDO
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="Aprender lo que es linux y las diferentes distribuciones que existen."
              startContent={icons.brace}
              href="/clase1-introduccion-a-linux"
            >
              Introducción a linux
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.ubuntu}
              href="/clase2-instalacion-de-ubuntu"
            >
              Instalación de ubuntu
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web brace."
              startContent={icons.terminal}
              href="/clase3-introduccion-a-la-terminal"
            >
              Introducción a la terminal
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.lock}
              href="/clase4-permisos-en-linux"
            >
              Permisos en linux
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.brush}
              href="/clase5-personalizacion-de-la-terminal"
            >
              Personalización de la terminal
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.bash}
              href="/clase6-introduccion-a-bash"
            >
              Introducción a bash
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/sign-in">INICIAR SESIÓN</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="primary" href="/sign-up" variant="flat">
            CREAR CUENTA
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

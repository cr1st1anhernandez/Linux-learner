import { EditorCode } from '@/app/components/EditorCode'
import Title from '@/app/components/Title'
import { Card, Link, Snippet } from '@nextui-org/react'
import { alacrittyConfig, fishConfig, fishTheme, starshipConfig } from './data'
export default function page(): JSX.Element {
  return (
    <section className="flex flex-col gap-4">
      <Title
        title="Personalizacion de la terminal"
        nextRoute="clase6-introduccion-a-bash"
        previousRoute="clase4-permisos-en-linux"
      />
      <article className="my-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="p-4">
          <h4>Shell</h4>
          <p>
            Imagina que el shell es el asistente personal de tu sistema
            operativo. La terminal sirve para comunicarte con él. Hay diferentes
            shells como Bash, Zsh, y Fish. Ubuntu, por defecto, utiliza Bash,
            pero lo modificaremos para que use
            <em className="font-bold"> Fish</em>, ya que proporciona
            autocompletado, colores, etc.
          </p>
        </Card>
        <Card className="p-4">
          <h4>Interprete de Comandos</h4>
          <p>
            Como su nombre indica, es un intérprete de comandos que traduce
            nuestros comandos para el sistema de forma resumida le das tus
            líneas de comandos, y él se encarga de representarlas al sistema
            operativo.
          </p>
        </Card>
        <Card className="p-4">
          <h4>Prompt</h4>
          <p>
            Ese pequeño amigo que aparece al lado de tus comandos, sirve para
            darte información sobre el estado de tu terminal. Nosotros
            ocuparemos una herramienta llamada
            <em className="font-bold"> Starship</em>, que modifica el prompt
            para tener figuras y colores personalizados.
          </p>
        </Card>
      </article>
      <main className="flex flex-col gap-4 2xl:flex-row 2xl:gap-8">
        <section className="flex flex-col gap-4 2xl:w-1/2">
          <article className="flex flex-col gap-4">
            <h3>Paso 1: Instalación de fish.</h3>
            <p>
              Abre la terminal y actualiza el sistema con el siguiente comando:
            </p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              sudo apt update
            </Snippet>
            <p>Instala Fish Shell con el comando:</p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              sudo apt-get install fish
            </Snippet>
            <p>Cambia tu shell predeterminado a Fish con el comando:</p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              chsh -s /usr/bin/fish
            </Snippet>
            <p>
              ¡Ahora! reinicia tu sistema para aplicar los cambios, después crea
              un directorio en la ruta ~/.config
            </p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              mkdir ~/.config/fish
            </Snippet>
            <p>
              Crea un archivo para la configuración en la nueva ruta
              ~/.config/fish/
            </p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              touch ~/.config/fish/config.fish
            </Snippet>
            <p>Copia y pega el siguiente código en el archivo</p>
            <EditorCode
              header="config.fish"
              icon="lucide:fish-symbol"
              text={fishConfig}
            />
            <p>
              Crea un archivo llamado color.fish en la ruta ~/.config/fish/ y
              pega el siguiente código
            </p>
            <EditorCode
              header="colors.fish"
              icon="lucide:fish-symbol"
              text={fishTheme}
            />
            <Card className="p-4">
              <h4>Explicación:</h4>
              <p>
                Como te habrás dado cuenta el archivo colors.ini configura los
                colores de fish y en cuanto a las configuraciones de fish la
                mayoría tienen comentarios que explican su funcionamiento si te
                interesa saber más y agregar mas configuraciones visita la
                documentación en el siguiente link.
              </p>
              <Link
                isExternal
                showAnchorIcon
                href="https://fishshell.com/docs/current/index.html"
                className="font-bold"
              >
                https://fishshell.com/docs/current/index.html
              </Link>
            </Card>
          </article>
          <article className="flex flex-col gap-4">
            <h3>Paso 2: Instalar la fuente</h3>
            <p>
              En nuestro caso usaremos una fuente llamada HackNerdFont si deseas
              ocupar alguna otra puedes encontrar algunas en este link.
            </p>
            <Link
              isExternal
              className="font-bold"
              anchorIcon
              href="https://www.nerdfonts.com/font-downloads"
            />
            <p>
              Dicho esto continuemos, entra a la carpeta de Descargas con el
              siguiente comando
            </p>
            <Snippet tooltipProps={{ content: 'copiar', delay: 0 }}>
              cd ~/Descargas
            </Snippet>
            <p>Instala la fuente con el siguiente comando</p>
            <Snippet tooltipProps={{ content: 'copiar', delay: 0 }}>
              <code className="overflow-x-scroll whitespace-pre-wrap break-all">
                wget
                https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/Hack.zip
              </code>
            </Snippet>
            <p>Copia el archivo a la ruta /usr/share/fonts</p>
            <Snippet tooltipProps={{ content: 'copiar', delay: 0 }}>
              <code className="overflow-x-scroll whitespace-pre-wrap break-all">
                sudo cp -r ~/Descargas/Hack.zip /usr/share/fonts
              </code>
            </Snippet>
            <p>Ahora entra a la carpeta de fuentes /usr/share/fonts</p>
            <Snippet tooltipProps={{ content: 'copiar', delay: 0 }}>
              sudo cd /usr/share/fonts
            </Snippet>
            <p>Descomprime el archivo con el comando</p>
            <Snippet tooltipProps={{ content: 'copiar', delay: 0 }}>
              sudo unzip Hack.zip
            </Snippet>
            <p>Por ultimo elimina el .zip</p>
            <Snippet tooltipProps={{ content: 'copiar', delay: 0 }}>
              sudo rm -r Hack.zip
            </Snippet>
          </article>
        </section>
        <section className="flex flex-col gap-4 2xl:w-1/2">
          <article className="flex flex-col gap-4">
            <h3>Paso 3: Instalar la herramienta Starship</h3>
            <p>Instala Starship con el siguiente comando:</p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              <code className="overflow-x-scroll whitespace-pre-wrap break-all">
                curl -sS https://starship.rs/install.sh | sh
              </code>
            </Snippet>
            <p>
              Si no tienes el archivo de configuración por defecto de starship
              en la ruta ~/.config/ crea el archivo con el siguiente comando:
            </p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              touch ~/.config/starship.toml
            </Snippet>
            <p>Agrega mi configuración al archivo:</p>
            <EditorCode
              header="starship.toml"
              icon="lucide:fish-symbol"
              text={starshipConfig}
            />
            <Card className="p-4">
              <h4>Explicación</h4>
              <p>
                La primera linea establece el tiempo para escanear, después
                desactivamos el salto de linea por defecto lo demás son
                configuraciones para mostrar iconos en el prompt según el
                lenguaje de programación si te interesa saber más puedes leer la
                documentación en el siguiente link.
              </p>
              <Link
                isExternal
                showAnchorIcon
                href="https://starship.rs/config/"
                className="font-bold"
              >
                https://starship.rs/config/
              </Link>
            </Card>
          </article>
          <article className="flex flex-col gap-4">
            <h3>Paso 4: Instalación de Alacritty en Ubuntu</h3>
            <p>
              Abre la terminal y actualiza el sistema con el siguiente comando:
            </p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              sudo apt update
            </Snippet>
            <p>
              Alacritty no está disponible en los repositorios oficiales de
              Ubuntu, pero puedes agregar un PPA (Personal Package Archive) para
              instalarlo.
            </p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              <code className="overflow-x-scroll whitespace-pre-wrap break-all">
                sudo add-apt-repository ppa:mmstick76/alacritty
              </code>
            </Snippet>
            <p>Actualiza el índice de paquetes</p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              sudo apt-get update
            </Snippet>
            <p>Instala Alacritty</p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              sudo apt-get install alacritty
            </Snippet>
            <p>Configura Alacritty como terminal predeterminado (opcional)</p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              <code className="overflow-x-scroll whitespace-pre-wrap break-all">
                sudo update-alternatives --config x-terminal-emulator
              </code>
            </Snippet>
            <p>
              Ahora puedes buscar alacritty dentro de tus aplicaciones o
              utilizar Ctrl + Alt + T.
            </p>
          </article>
          <article className="flex flex-col gap-4">
            <h3>Paso 5: Configurar Alacritty</h3>
            <p>
              Alacritty tiene un archivo de configuración en la ruta
              .confi/alacritty/alacritty.yml si no es asi crea la carpeta con el
              siguiente comando:
            </p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              mkdir .config/alacritty
            </Snippet>
            <p>Y el archivo con este comando:</p>
            <Snippet
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              <code className="overflow-x-scroll whitespace-pre-wrap break-all">
                touch .config/alacritty/alacritty.yml
              </code>
            </Snippet>
            <h4>Mi configuración de alacritty:</h4>
            <p>
              Puedes copiar mi configuración y modificarla a tu gusto mediante
              la documentación de alacritty:
            </p>
            <Link
              href="https://github.com/alacritty/alacritty/blob/master/docs/features.md"
              isExternal
              className="inline break-all font-bold"
            >
              https://github.com/alacritty/alacritty/blob/master/docs/features.md
            </Link>
            <EditorCode
              header="alacritty.yml"
              icon="lucide:fish-symbol"
              text={alacrittyConfig}
            />
          </article>
        </section>
      </main>
    </section>
  )
}

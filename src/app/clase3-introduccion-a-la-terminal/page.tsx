'use client'
import {
  linesExample,
  linesExercise,
} from '@/app/clase3-introduccion-a-la-terminal/data'
import { Terminal } from '@/app/components/Terminal'
import Title from '@/app/components/Title'
import { Eye } from '@/app/icons/Eye'
import { EyeClose } from '@/app/icons/EyeClose'
import { SpotLight } from '@/app/icons/SpotLight'
import { Card, Snippet } from '@nextui-org/react'
import { useState } from 'react'

export default function Page(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = (): void => {
    setIsOpen(!isOpen)
  }
  return (
    <section className="flex flex-col gap-4">
      <Title
        title="La terminal"
        previousRoute="/clase2-instalacion-de-ubuntu"
        nextRoute="/clase4-permisos-en-linux"
      />
      <p className="w-full">
        La terminal es la ✨ varita mágica ✨ de la informática, donde escribes
        comandos y tu sistema responde. Es como ser un 🥷 ninja de archivos,
        ejecutar programas con palabras místicas y personalizar tu sistema, todo
        desde tu teclado. ¿Quieres ir directo a tu carpeta de descargas?{' '}
        <span className="font-bold"></span>cd Descargas y estás allí. ¿Necesitas
        instalar software? sudo apt-get install magia y considera que está
        hecho. No más clics en íconos; aquí, cada comando es una línea de código
        que hace realidad tus deseos. Sin menús interminables, solo escribe y la
        terminal te lleva a donde quieras. Y si te sientes perdido, no te
        preocupes; la ayuda está a un --help o man comando de distancia. La
        terminal no es solo una herramienta, ¡es tu sabio consejero en este
        viaje cibernético!
      </p>
      <section className="grid grid-cols-2 gap-4 xl:grid-rows-3">
        <Card className="col-span-2 p-4 xl:col-span-1 xl:row-span-2">
          <h4>Comandos básicos</h4>
          <ul>
            <li>
              <code className="text-lg font-bold">pwd</code> Muestra el
              directorio de trabajo actual
            </li>
            <li>
              <code className="text-lg font-bold">cd </code>
              <span className="font-bold text-rose-600">
                nombreDelDirectorio
              </span>{' '}
              Entra al directorio.
            </li>
            <li>
              <code className="text-lg font-bold">ls</code> Lista archivos y
              directorios en el directorio actual
            </li>
            <li>
              <code className="text-lg font-bold">nano </code>
              <span className="font-bold text-rose-600 ">
                nombreDelDirectorio
              </span>{' '}
              Herramienta que te permite editar un archivo.
            </li>
            <li>
              <code className="text-lg font-bold">cp</code> Copia archivos o
              directorios
            </li>
            <li>
              <code className="text-lg font-bold">mkdir </code>
              <span className="font-bold text-rose-600 ">
                nombreDelDirectorio
              </span>{' '}
              Crea un nuevo directorio
            </li>
            <li>
              <code className="text-lg font-bold">mv</code> Mueve o renombra
              archivos o directorios
            </li>
            <li>
              <code className="text-lg font-bold">cat </code>
              <span className="font-bold text-rose-600 ">
                nombreDelDirectorio
              </span>{' '}
              Imprime el contenido de un archivo.
            </li>
            <li>
              <code className="text-lg font-bold">grep</code> Busca texto en
              archivos
            </li>

            <li>
              <code className="text-lg font-bold">touch </code>
              <span className="font-bold text-rose-600 ">
                nombreDelDirectorio
              </span>{' '}
              Crea un nuevo archivo vacío
            </li>
            <li>
              <code className="text-lg font-bold">..</code> Representa el
              directorio padre.
            </li>
            <li>
              <code className="text-lg font-bold">rm </code>
              <span className="font-bold text-rose-600 ">
                nombreDelDirectorio
              </span>{' '}
              Elimina archivos
            </li>
            <li>
              <code className="text-lg font-bold">.</code> Representa el
              directorio actual.
            </li>
            <li>
              <code className="text-lg font-bold">rm -r </code>
              <span className="font-bold text-rose-600 ">
                nombreDelDirectorio
              </span>{' '}
              Elimina directorios
            </li>
          </ul>
        </Card>
        <Card className="col-span-2 flex flex-col gap-4 p-4 xl:col-span-1 xl:row-span-3">
          <h3>Ejemplo de uso:</h3>
          <Terminal lines={linesExample} />
          <h4>Explicación:</h4>
          <ol className="list-inside list-decimal">
            <li>Observamos la ruta en la que estamos con el comando pwd</li>
            <li>Entramos al directorio Descargas</li>
            <li>
              Creamos una carpeta (directorio) llamada archivos con el comando
              mkdir
            </li>
            <li>Entramos en la carpeta archivos con cd archivos</li>
            <li>
              Creamos varios archivos de texto (archivo1.txt, archivo2.txt,
              archivo3.txt) con el comando touch
            </li>
            <li>
              Por último, utilizamos el comando ls para ver los archivos en la
              carpeta archivos
            </li>
            <li>
              Eliminamos todos los archivos en la carpeta archivos con el
              comando rm -r *
            </li>
            <li>Regresamos al directorio Descargas con cd ..</li>
            <li>
              Eliminamos la carpeta archivos con el comando rm -r archivos
            </li>
          </ol>
        </Card>
        <Card className="col-span-2 flex flex-col gap-2 p-4 xl:col-span-1 xl:row-span-1">
          <h4>Rutas relativas y absolutas:</h4>
          <p>
            Las rutas relativas como su nombre lo indica son relativas al
            directorio en donde te encuentras, y las absolutas se refieren a la
            ruta completa observa el siguiente ejemplo: estas en la carpeta
            <span className="font-bold"> Descargas</span> y quieres ir a la
            carpeta <span className="font-bold">Documentos</span> puedes hacerlo
            de dos formas:
          </p>
          <footer className="grid gap-6 md:grid-cols-2">
            <Card className="p-4">
              <h4>Absoluta:</h4>
              <p>cd /home/cristian/Documentos</p>
            </Card>
            <Card className="p-4">
              <h4>Relativa</h4>
              <p>cd ../Documentos</p>
            </Card>
          </footer>
        </Card>
      </section>
      <section className="grid grid-cols-2 gap-4 xl:grid-rows-2">
        <Card className="col-span-2 p-4 xl:col-span-1 xl:row-span-1">
          <h4>Instalar Software desde la Terminal</h4>
          <li className="list-inside list-disc">
            <h5 className="inline">Actualizar la lista de paquetes:</h5>
            <p>
              Antes de instalar un nuevo software, es recomendable actualizar la
              lista de paquetes disponibles para asegurarte de obtener la
              versión más reciente.
            </p>
            <Snippet
              className="my-2"
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              sudo apt update
            </Snippet>
          </li>

          <li className="list-inside list-disc">
            <h5 className="inline">Instalar un paquete:</h5>
            <p>
              Para instalar un paquete, utiliza el comando{' '}
              <code>sudo apt install </code>
              seguido del nombre del paquete que deseas instalar. Por ejemplo,
              para Vim:
            </p>
            <Snippet
              className="my-2"
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              sudo apt install vim
            </Snippet>
          </li>

          <li className="list-inside list-disc">
            <h5 className="inline">Eliminar un paquete:</h5>
            <p>
              Si decides desinstalar un paquete, puedes hacerlo con el comando
              <code>sudo apt remove</code>. Por ejemplo, para eliminar Vim:
            </p>
            <Snippet
              className="my-2"
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              sudo apt remove vim
            </Snippet>
          </li>
          <li className="list-inside list-disc">
            <h5 className="inline">Listar paquetes instalados:</h5>
            <p>
              Puedes ver la lista de paquetes instalados con el comando
              <code>dpkg -l</code>. Este comando mostrará una lista completa de
              todos los paquetes instalados.
            </p>
            <Snippet
              className="my-2"
              tooltipProps={{
                content: 'copiar',
                delay: 0,
              }}
            >
              dpkg -l
            </Snippet>
          </li>
        </Card>
        <Card className="col-span-2 flex flex-col p-4 xl:col-span-1 xl:row-span-2">
          <h4>Ejercicio para Practicar:</h4>
          <ol className="list-inside list-decimal">
            <li>
              Muévete al directorio{' '}
              <span className="font-bold text-stone-800 dark:text-stone-200">
                Documentos
              </span>
            </li>
            <li>
              Crea una carpeta en el directorio Documentos llamada{' '}
              <span className="font-bold text-stone-800 dark:text-stone-200">
                practica
              </span>
            </li>
            <li>
              Entra en el directorio{' '}
              <span className="font-bold text-stone-800 dark:text-stone-200">
                practica
              </span>
            </li>
            <li>
              Crea los siguientes archivos de texto:
              <ul className="ml-6 list-inside list-disc">
                <li>
                  Un archivo llamado{' '}
                  <span className="font-bold text-stone-800 dark:text-stone-200">
                    linux.txt
                  </span>{' '}
                </li>
                <li>
                  Un archivo llamado{' '}
                  <span className="font-bold text-stone-800 dark:text-stone-200">
                    comandos.txt
                  </span>{' '}
                </li>
                <li>
                  Un archivo llamado
                  <span className="font-bold text-stone-800 dark:text-stone-200">
                    {' '}
                    index.html txt
                  </span>
                </li>
                <li>
                  Otro archivo llamado
                  <span className="font-bold text-stone-800 dark:text-stone-200">
                    {' '}
                    practica.txt
                  </span>
                </li>
                <li>
                  Y un último archivo llamado
                  <span className="font-bold text-stone-800 dark:text-stone-200">
                    {' '}
                    ejercicio.md
                  </span>
                </li>
              </ul>
            </li>
            <li>
              Lista los archivos del directorio
              <span className="font-bold text-stone-800 dark:text-stone-200">
                {' '}
                practica{' '}
              </span>
              para ver que se crearon correctamente.
            </li>
            <li>
              Escribe:
              <span className="font-bold text-stone-800 dark:text-stone-200">
                Estoy aprendiendo linux{' '}
              </span>
              en el archivo linux.txt y ocupa:
              <span className="font-bold text-stone-800 dark:text-stone-200">
                Ctrl + g
              </span>{' '}
              dentro de la herramienta nano para guardar el archivo.
            </li>
            <li>Imprime el contenido del archivo linux.txt</li>
            <li>
              Cambia el nombre del archivo{' '}
              <span className="font-bold text-stone-800 dark:text-stone-200">
                comandos.txt
              </span>{' '}
              a{' '}
              <span className="font-bold text-stone-800 dark:text-stone-200">
                comandos-linux.txt
              </span>
            </li>
            <li>
              Crea una copia de
              <span className="font-bold text-stone-800 dark:text-stone-200">
                {' '}
                practica.txt
              </span>{' '}
              y llámala{' '}
              <span className="font-bold text-stone-800 dark:text-stone-200">
                practica_backup.txt
              </span>
            </li>
            <li>Entra al archivo practica.txt y escribe test</li>
            <li>
              Muestra la diferencia entre el contenido de
              <span className="font-bold text-stone-800 dark:text-stone-200">
                {' '}
                practica.txt
              </span>{' '}
              y{' '}
              <span className="font-bold text-stone-800 dark:text-stone-200">
                practica_backup.txt
              </span>
            </li>
            <li>
              Borra el archivo
              <span className="font-bold text-stone-800 dark:text-stone-200">
                {' '}
                index.html
              </span>
            </li>
            <li>Lista todo el contenido dentro de la carpeta practica</li>
            <li>Borra todo el contenido de la carpeta practica.</li>
            <li>Por ultimo borra la carpeta practica.</li>
          </ol>

          <Card className="my-4 flex flex-col gap-4 p-4">
            <header className="flex h-fit w-full items-center justify-between gap-1 text-left font-semibold">
              <button
                onClick={handleOpen}
                className="cursor-pointer text-zinc-800 transition-all duration-300 ease-in-out hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                {isOpen ? 'Ocultar solución' : 'Mostrar solución'}
              </button>
              <button
                className="cursor-pointer text-zinc-800 transition-all duration-300 ease-in-out hover:text-black dark:text-zinc-300 dark:hover:text-white"
                onClick={handleOpen}
              >
                {isOpen ? <EyeClose /> : <Eye />}
              </button>
            </header>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? 'h-auto opacity-100' : 'h-auto opacity-0'
              }`}
            >
              <Terminal lines={linesExercise} />
            </div>
          </Card>
        </Card>
        <Card className="col-span-2 w-full p-4 xl:col-span-1 xl:row-span-1">
          <header className="flex items-center gap-1">
            <SpotLight className="h-6 w-6" />
            <h4>Tips</h4>
          </header>
          <ul className="list-inside list-disc">
            <li>
              Ahorra tiempo, en lugar de hacer esto:
              <ul>
                <span className="block font-bold">touch archivo1.html</span>
                <span className="block font-bold">touch archivo2.css</span>
              </ul>
            </li>
            <li>
              Haz esto:
              <span className="block font-bold">
                touch archivo1.html archivo2.css
              </span>
            </li>
            <li className="list-disc">
              En lugar escribir<span className="font-bold"> clear </span>
              ocupa<span className="font-bold"> ctrl + L </span> para limpiar la
              terminal.
            </li>
            <li>
              Utiliza<span className="font-bold"> & </span>para ejecutar un
              comando en segundo plano.
            </li>
            <li>
              Si estas ocupando alguna terminal moderna la tecla
              <span className="font-bold"> Tab </span> autocompleta palabras
            </li>
            <li>
              Ahorra tiempo, en lugar de hacer esto:
              <ul>
                <span className="block font-bold">cd Documentos/</span>
                <span className="block font-bold">cd practica/</span>
                <span className="block font-bold">rm -r ejemplo.txt</span>
              </ul>
            </li>
            <li>
              Haz esto:
              <span className="block font-bold">
                rm -r Documentos/practica/ejemplo.txt
              </span>
            </li>
            <li>
              Usa las teclas de
              <span className="font-bold"> flecha arriba y abajo </span>
              para navegar por el historial de comandos.
            </li>
            <li>
              <span className="font-bold">Ctrl + shift + c:</span> Copiar texto
              en la terminal
            </li>
            <li>
              <span className="font-bold">Ctrl + shift + v:</span> Pegar texto
              en la terminal
            </li>
            <li>
              <span className="font-bold">Ctrl + C:</span> Detiene la ejecución
              de un comando.
            </li>
            <li>
              <span className="font-bold">{`>`}</span> Redirige la salida y
              sobrescribe el contenido del archivo si ya existe.
            </li>
          </ul>
        </Card>
      </section>
    </section>
  )
}

'use client'
import {
  linesExercise1,
  linesExercise2,
} from '@/app/clase4-permisos-en-linux/data'
import { Terminal } from '@/app/components/Terminal'
import Title from '@/app/components/Title'
import { Check } from '@/app/icons/Check'
import { Copy } from '@/app/icons/Copy'
import { Eye } from '@/app/icons/Eye'
import { EyeClose } from '@/app/icons/EyeClose'
import { Card } from '@nextui-org/react'
import { useState } from 'react'

export default function Page(): JSX.Element {
  const [isOpenExercise1, setIsOpenExercise1] = useState(false)

  const handleIsOpenExercise1 = (): void => {
    setIsOpenExercise1(!isOpenExercise1)
  }

  const handleIsOpenExcercise2 = (): void => {
    setIsOpenExercise2(!isOpenExercise2)
  }

  const [isOpenExercise2, setIsOpenExercise2] = useState(false)

  const [handleClipBoard, setHandleClipBoard] = useState(false)

  const text = `#!/bin/bash\necho "¡Hola, este es mi script!"`

  const handleClick = (): void => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setHandleClipBoard(true)
        setTimeout(() => {
          setHandleClipBoard(false)
        }, 1500)
      })
      .catch((error) => {
        console.error('Error al copiar al portapapeles:', error)
        setHandleClipBoard(false)
      })
  }

  return (
    <section className="flex flex-col gap-4">
      <Title
        title="Permisos en linux"
        nextRoute="clase5-personalizacion-de-la-terminal"
        previousRoute="clase3-introduccion-a-la-terminal"
      />
      <p>
        En el vasto mundo de Linux, los permisos son las llaves 🔐 que abren las
        puertas de tus archivos y directorios. Imagina que cada archivo es una
        caja fuerte, y los permisos son la combinación secreta que controla
        quién puede acceder a su contenido. En la terminal, te conviertes en el
        guardián de estas cajas fuertes, dictando quién tiene el privilegio de
        ver, modificar o ejecutar lo que hay dentro. Es como ser el maestro de
        las cerraduras digitales, y cada comando que ingreses será una orden
        para establecer las reglas. ¿Quieres restringir el acceso a tu carpeta
        personal?
        <code className="font-bold"> chmod 700 CarpetaSecreta </code>y nadie más
        que tú podrá entrar. ¿Necesitas compartir un archivo, pero solo para
        lectura?
        <code className="font-bold"> chmod 444 ArchivoSecreto </code>y asegúrate
        de que nadie lo altere accidentalmente.💻
      </p>
      <main className="grid gap-4 pb-4">
        <section className="grid grid-cols-2 grid-rows-1 gap-4">
          <article className="col-span-2 row-span-1 xl:col-span-1">
            <h3>Usuarios y Grupos</h3>
            <p className="pb-2">
              En linux existen usuarios y grupos, por defecto tu usuario tiene
              la posibilidad de ejecutar comandos como administrador(root).
            </p>
            <div className="flex flex-col gap-2">
              <Card className="p-4">
                <h4>Root: El Maestro de los Maestros 👑</h4>
                <p>
                  Imagina ser el usuario que tiene control sobre todo el sistema
                  operativo y poder ejecutar comandos con privilegios máximos
                  ¡eso es ser el usuario root en Linux!
                </p>
              </Card>
              <Card className="p-4">
                <h4>Comando Sudo:</h4>
                <p>
                  Siempre que quieras ejecutar algo en la terminal con permisos
                  root tienes que ocupar el comando
                  <code className="font-bold"> sudo </code>seguido de la
                  instrucción que quieras realizar.
                </p>
              </Card>
              <Card className="p-4">
                <h4>Grupo por defecto:</h4>
                <p>
                  Cuando Creamos un usuario este por defecto pertenece a un
                  grupo con el mismo nombre de usuario. Y los grupos a los que
                  lo agreguemos serán llamados grupos secundarios.
                </p>
              </Card>
            </div>
          </article>
          <article className="col-span-2 row-span-1 xl:col-span-1">
            <h3>Establecer permisos a archivos y directorios</h3>
            <p>
              El comando<code className="font-bold"> chmod </code>es el
              encargado de establecer permisos existen dos formas de lograrlo.
            </p>
            <h4 className="mt-1.5">Conceptos Importantes</h4>
            <ul className="grid grid-cols-1 grid-rows-3 gap-2 text-center md:grid-cols-3 md:grid-rows-1">
              <li className="flex flex-col gap-2">
                <Card className="px-4 py-2">u=propietario</Card>
                <Card className="px-4 py-2">g=grupo</Card>
                <Card className="px-4 py-2">o=otros</Card>
              </li>
              <li className="flex flex-col gap-2">
                <Card className="px-4 py-2">+:Agregar permiso</Card>
                <Card className="px-4 py-2">-:Quitar permiso</Card>
                <Card className="px-4 py-2">=:Asignar permiso</Card>
              </li>
              <li className="flex flex-col gap-2">
                <Card className="px-4 py-2">read = 2² = 4</Card>
                <Card className="px-4 py-2">write = 2¹ = 2</Card>
                <Card className="px-4 py-2">Execute = 2⁰ = 1</Card>
              </li>
            </ul>

            <h4 className="mt-1.5">Clasificación:</h4>
            <ul className="list-inside list-disc">
              <li>
                <span className="font-bold text-zinc-800 dark:text-zinc-300">
                  Read (r):{' '}
                </span>
                <p className="inline">
                  Permiso para ver el contenido de un archivo o listar el
                  contenido de un directorio.
                </p>
              </li>
              <li>
                <span className="font-bold text-zinc-800 dark:text-zinc-300">
                  Write (w):{' '}
                </span>
                <p className="inline">
                  Permiso para modificar, agregar, eliminar, renombrar archivos
                  o directorios.
                </p>
              </li>
              <li>
                <span className="font-bold text-zinc-800 dark:text-zinc-300">
                  Execute (x):{' '}
                </span>
                <p className="inline">
                  Permiso para ejecutar un archivo como programa o ingresar a un
                  directorio.
                </p>
              </li>
            </ul>
            <h4>Categorías:</h4>
            <ul className="list-inside list-disc">
              <li>
                <span className="font-bold text-purple-500">Propietario: </span>
                <p className="inline">
                  El usuario que creó el archivo o directorio.
                </p>
              </li>
              <li>
                <span className="font-bold text-blue-500">Grupo: </span>
                <p className="inline">
                  Un conjunto de usuarios con permisos similares.
                </p>
              </li>
              <li>
                <span className="font-bold text-green-500">Otros: </span>
                <p className="inline">
                  Cualquier usuario que no sea el propietario ni forme parte del
                  grupo.
                </p>
              </li>
            </ul>
          </article>
        </section>
        <section className="grid grid-cols-2 grid-rows-1 gap-4">
          <article className="col-span-2 row-span-1 xl:col-span-1">
            <h4>Comandos para grupos y usuarios:</h4>
            <ul className="list-inside list-disc">
              <li>
                <code className="font-bold">sudo groupadd nombreGrupo</code>:
                Crea un grupo
              </li>
              <li>
                <code className="font-bold">
                  sudo useradd -m nombreUsuario -p contraseña
                </code>
                : Crea un usuario con su directorio personal y contraseña
              </li>
              <li>
                <code className="font-bold">
                  sudo usermod -a -G nombreGrupo nombreUsuario
                </code>
                : Agrega un usuario a un grupo
              </li>
              <li>
                <code className="font-bold">sudo id -nG nombreUsuario</code>:
                Lista los grupos secundarios a los que pertenece el usuario
              </li>
              <li>
                <code className="font-bold">
                  sudo usermod -G nombreGrupo nombreUsuario
                </code>
                : Quita un usuario de un grupo secundario
              </li>
              <li>
                <code className="font-bold">sudo delgroup nombreGrupo</code>:
                Elimina un grupo del sistema
              </li>
              <li>
                <code className="font-bold">sudo deluser nombreUsuario</code>:
                Elimina un usuario del sistema
              </li>
              <li>
                <code className="font-bold">
                  sudo cat /etc/passwd | cut -d: -f1
                </code>
                : Lista los usuarios del sistema
              </li>
              <li>
                <code className="font-bold">cat /etc/group | cut -d: -f1</code>:
                Lista los grupos del sistema
              </li>
            </ul>
            <Card className="my-4 p-4">
              <ul className="list-inside list-disc">
                <li>
                  El argumento<code className="font-bold"> -m </code>en el
                  comando useradd es para crear el directorio personal del
                  usuario.
                </li>
                <li>
                  El argumento<code className="font-bold"> -p </code>en el
                  comando useradd es para establecer la contraseña del usuario.
                </li>
                <li>
                  El argumento<code className="font-bold"> -a </code>en el
                  comando usermod es para agregar el usuario a un grupo.
                </li>
                <li>
                  El agrumento<code className="font-bold"> -G </code>en el
                  comando usermod es para establecer el grupo secundario del
                  usuario.
                </li>
              </ul>
            </Card>
            <Card className="p-4 xl:col-span-1">
              <h4>💡Tips</h4>
              <ul className="list-inside list-disc">
                <li>
                  Comprende la estructura de permisos: Propietario, Grupo, y
                  Otros.
                </li>
                <li>
                  Utiliza la notación octal para establecer permisos de manera
                  eficiente.
                </li>
                <li>
                  Entiende los comandos básicos como{' '}
                  <code>chmod(cambiar permisos)</code>,{' '}
                  <code>chown(cambiar propietario)</code>, y{' '}
                  <code>chgrp(cambiar grupo)</code>.
                </li>
                <li>
                  Comprende el significado de los números en <code>chmod</code>.
                </li>
                <li>
                  Experimenta con la notación octal en <code>chmod</code> para
                  cambiar permisos de manera rápida.
                </li>
                <li>
                  Utiliza wildcards (<code>*</code>, <code>?</code>) para
                  aplicar cambios de permisos a varios archivos.
                </li>
                <li>
                  Utiliza <code>ls -l</code> para visualizar los permisos de
                  archivos y directorios.
                </li>
              </ul>
            </Card>
          </article>
          <article className="col-span-2 row-span-1 xl:col-span-1">
            <h4>Ejemplo:</h4>
            <p>
              Antes de empezar a aprender los comandos relacionados a los
              permisos ejecuta el comando
              <code className="font-bold"> ls -l </code>en tu terminal obtendrás
              información relacionada al directorio actual, nos centraremos en
              las primeras 10 letras:
            </p>
            <article className="my-4 flex flex-col gap-4">
              <Card className="p-4">
                <p>
                  La primera letra es el tipo de archivo, las siguientes 3 son
                  los permisos del propietario, las siguientes 3 permisos de
                  grupo y las ultimas 3 los permisos de todos demás usuarios, en
                  mi caso el directorio raíz tiene los siguientes permisos:
                </p>
              </Card>
              <div className="flex w-full flex-col justify-between gap-1 text-center font-bold md:flex-row md:gap-4 md:text-2xl">
                <div>
                  <Card className="py-4 text-center ">d</Card>
                  <span className="text-lg">Tipo de archivo</span>
                </div>
                <div>
                  <Card className="py-4 text-center ">rwx</Card>
                  <span className="text-lg">Permisos del propietario</span>
                </div>
                <div>
                  <Card className="py-4 text-center ">r-x</Card>
                  <span className="text-lg">Permisos del grupo</span>
                </div>
                <div>
                  <Card className="py-4 text-center ">r-x</Card>
                  <span className="text-lg">Permisos de otros</span>
                </div>
              </div>
            </article>
            <h4>Primer método para dar permisos:</h4>
            <p>para dar los siguientes permisos:</p>
            <ul className="list-inside list-disc">
              <li className="font-bold text-purple-500">
                propietario: lectura, escritura y ejecución
              </li>
              <li className="font-bold text-blue-500">
                grupo: lectura y escritura
              </li>
              <li className="font-bold text-green-500">otros: lectura</li>
            </ul>
            <p>Se ejecutaría el siguiente comando:</p>
            <code className="text-xl font-bold ">
              {' '}
              chmod u=rwx,g=rw,o=r archivo.txt{' '}
            </code>
            <p>
              O por ejemplo quitar permisos de ejecución al propietario seria
              asi:
            </p>
            <code className="text-xl font-bold ">chmod u-x archivo.txt </code>
            <p>
              Pero esto es muy largo y tedioso por eso existe el siguiente
              método:
            </p>
            <h4>Segundo método con notación Octal:</h4>
            <p>
              Hagamos lo mismo que con el método anterior pero con notación
              Octal:
            </p>
            <ul className="list-inside list-disc">
              <li className="w-full font-bold text-purple-500">
                propietario: lectura, escritura y ejecución = 4 + 2 + 1 = 7
              </li>
              <li className="font-bold text-blue-500">
                grupo: lectura y escritura = 4 + 2 = 6
              </li>
              <li className="font-bold text-green-500">
                otros: lectura = 4 + 1 = 5
              </li>
            </ul>
            <p>
              por lo tanto el comando a ejecutar seria el siguiente:
              <code className="text-xl font-bold"> chmod 765 archivo.txt </code>
            </p>
          </article>
        </section>
        <footer className="grid-row-2 grid grid-cols-2 gap-4">
          <Card className="col-span-2 flex flex-col gap-4 p-4 xl:col-span-1">
            <h4>Ejercicio para Practicar:</h4>
            <ol className="list-inside list-decimal">
              <li>Crea un grupo llamado estudiantes</li>
              <li>Crea un usuario llamado estudiante1</li>
              <li>
                Agrega el usuario estudiante1 al grupo secundario estudiantes
              </li>
              <li>
                Lista los grupos a los cuales pertenece el usuario estudiante1
              </li>
              <li>
                Quita el usuario estudiante1 del grupo secundario estudiantes
              </li>
              <li>
                Elimina el usuario estudiante1 el grupo estudiante1 se eliminara
                automáticamente
              </li>
            </ol>
            <Card className={`flex h-max flex-col gap-4 p-4`}>
              <header className="flex items-center justify-between font-semibold">
                <button
                  className="cursor-pointer text-zinc-800 transition-all duration-300 ease-in-out hover:text-black dark:text-zinc-300 dark:hover:text-white"
                  onClick={handleIsOpenExercise1}
                >
                  {isOpenExercise1 ? 'Ocultar solución' : 'Mostrar solución'}
                </button>
                <button
                  onClick={handleIsOpenExercise1}
                  className="cursor-pointer text-zinc-800 transition-all duration-300 ease-in-out hover:text-black dark:text-zinc-300 dark:hover:text-white"
                >
                  {isOpenExercise1 ? <EyeClose /> : <Eye />}
                </button>
              </header>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpenExercise1 ? 'h-auto opacity-100' : 'h-auto opacity-0'
                }`}
              >
                <Terminal lines={linesExercise2} />
              </div>
              <p className="font-bold text-blue-600">
                No te desanimes si no entiendes algo.
              </p>
            </Card>
          </Card>
          <Card className="col-span-2 row-span-1 flex flex-col gap-4 p-4 xl:col-span-1">
            <h4>Ejercicio para Practicar:</h4>
            <ol className="list-inside list-decimal">
              <li>
                Crea un archivo llamado
                <span className="font-bold text-rose-500"> mi_script.sh </span>
              </li>
              <li>
                Abre el archivo utilizando nano y escribe dentro el siguiente
                contenido:
                <pre className="text-md relative overflow-x-auto rounded-md bg-zinc-950 p-4 font-bold md:text-lg">
                  <code className="block text-rose-500">{`#!/bin/bash`}</code>
                  <code className="inline text-purple-500">{`echo `}</code>
                  <code className="inline text-green-600">{`"¡Hola, este es mi script!"`}</code>
                  <button
                    className="absolute right-4 top-4 flex items-center text-zinc-300 transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-white"
                    onClick={handleClick}
                  >
                    {handleClipBoard ? <Check /> : <Copy />}
                  </button>
                </pre>
              </li>
              <li>
                Intenta ejecutar el script con:
                <code className="font-bold">./mi_script.sh</code>
              </li>
              <li>
                Recibirás un mensaje de permisos insuficientes, tu trabajo es
                hacer que el script sea ejecutable.
              </li>
            </ol>

            <Card
              className={`flex flex-col gap-4 p-4 `}
              onClick={handleIsOpenExcercise2}
            >
              <header className="flex items-center justify-between font-semibold">
                <button
                  className="cursor-pointer text-zinc-800 transition-all duration-300 ease-in-out hover:text-black dark:text-zinc-300 dark:hover:text-white"
                  onClick={handleIsOpenExcercise2}
                >
                  {isOpenExercise2 ? 'Ocultar solución' : 'Mostrar solución'}
                </button>
                <button
                  onClick={handleIsOpenExcercise2}
                  className="cursor-pointer text-zinc-800 transition-all duration-300 ease-in-out hover:text-black dark:text-zinc-300 dark:hover:text-white"
                >
                  {isOpenExercise2 ? <EyeClose /> : <Eye />}
                </button>
              </header>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpenExercise2 ? 'h-auto opacity-100' : 'h-auto opacity-0'
                }`}
              >
                <Terminal lines={linesExercise1} />
              </div>
            </Card>
          </Card>
        </footer>
      </main>
    </section>
  )
}

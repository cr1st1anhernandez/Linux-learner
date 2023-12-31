'use client'
import {
  EditorConditional,
  EditorEnvironmentVariable,
  EditorExample,
  EditorExercise,
  EditorExternalCommand,
  EditorFilesAndDirectories,
  EditorFunction,
  EditorInputUser,
  EditorLoop,
  EditorParameters,
  EditorUtilCommands,
  EditorVariable,
} from '@/app/components/Editors'
import Title from '@/app/components/Title'
import { Eye } from '@/app/icons/Eye'
import { EyeClose } from '@/app/icons/EyeClose'
import { useState } from 'react'

export default function Page(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = (): void => {
    setIsOpen(!isOpen)
  }
  return (
    <section className="flex flex-col gap-4">
      <Title
        title="Scripting en bash"
        nextRoute="/"
        previousRoute="clase5-personalizacion-de-la-terminal"
      />
      <p className="col-span-6">
        Aprender Bash scripting nos sirve a los usuarios de Linux para tener la
        capacidad de crear scripts para automatizar tareas repetitivas,
        personalizar el entorno de trabajo y ejecutar comandos de manera
        coherente. Esto facilita la gestión de usuarios, la configuración del
        sistema, el monitoreo del rendimiento etc...
      </p>
      <main className="mb-4 grid grid-cols-6 gap-4">
        <section className="col-span-6 flex w-full flex-col gap-2 xl:col-start-1 xl:col-end-3">
          <h4>Variables en bash:</h4>
          <EditorVariable />
          <h4>Condicionales en bash:</h4>
          <EditorConditional />
          <h4>Bucles en bash:</h4>
          <EditorLoop />
        </section>
        <section className="col-span-6 flex w-full flex-col gap-2 xl:col-start-3 xl:col-end-5">
          <h4>Parámetros en bash:</h4>
          <EditorParameters />
          <h4>Entrada del usuario:</h4>
          <EditorInputUser />
          <h4>Comandos externos:</h4>
          <EditorExternalCommand />
          <h4>Funciones en bash:</h4>
          <EditorFunction />
        </section>
        <section className="col-span-6 flex w-full flex-col gap-2 xl:col-start-5 xl:col-end-7">
          <h4>Archivos y directorios:</h4>
          <EditorFilesAndDirectories />
          <h4>Variables de entorno:</h4>
          <EditorEnvironmentVariable />
          <h4>Commandos útiles:</h4>
          <EditorUtilCommands />
        </section>
        <section className="col-span-6 xl:col-start-1 xl:col-end-4">
          <h4>Ejercicio practico Script Copia de Archivos:</h4>
          <article className="rounded-md bg-[#18181b] px-4 py-8 font-bold text-zinc-300">
            <p className="mb-2">
              Crea un script en bash que busque y reemplace una palabra en
              varios archivos en un directorio.
            </p>
            <div
              className={`flex flex-col gap-4 overflow-hidden rounded-md bg-[#1e1e25] p-4 text-left shadow-sm`}
            >
              <div className="flex h-fit w-full items-center justify-between gap-1 text-left font-semibold text-zinc-300 ">
                <button
                  className="cursor-pointer hover:text-white"
                  onClick={handleIsOpen}
                >
                  {isOpen ? 'Ocultar solución' : 'Mostrar solución'}
                </button>
                <button
                  onClick={handleIsOpen}
                  className="cursor-pointer hover:text-white"
                >
                  {isOpen ? <EyeClose /> : <Eye />}
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? 'h-auto opacity-100' : 'h-auto opacity-0'
                }`}
              >
                <EditorExercise />
              </div>
            </div>
          </article>
        </section>
        <section className="col-span-6 xl:col-start-4 xl:col-end-7">
          <h4>Ejemplo de uso real:</h4>
          <EditorExample />
        </section>
      </main>
    </section>
  )
}

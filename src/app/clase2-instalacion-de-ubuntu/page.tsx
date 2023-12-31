'use client'
import { question1 } from '@/app/clase2-instalacion-de-ubuntu/data'
import Question from '@/app/components/Question'
import Title from '@/app/components/Title'
import { Card, Link } from '@nextui-org/react'

export default function ubuntuPage(): JSX.Element {
  return (
    <section className="flex flex-col gap-4">
      <Title
        title="Instalación de ubuntu"
        previousRoute="/clase1-introduccion-a-linux"
        nextRoute="/clase3-introduccion-a-la-terminal"
      />
      <main className="flex flex-col gap-8 lg:flex-row">
        <aside className="flex flex-col gap-4 lg:w-1/2">
          <article>
            <h3>Instalación en nuestra maquina.</h3>
            <p>
              Instalar directamente en nuestra maquina nos permite instalarlo
              junto a windows y cada que iniciemos nuestro pc nos pregunte el si
              queremos iniciar con windows o linux.
            </p>
            <Card radius="md" className="my-2 p-4">
              <p>
                El rendimiento suele ser mucho mejor porque el sistema operativo
                se ejecuta directamente en el hardware físico
              </p>
            </Card>
          </article>
          <article>
            <h4>1. Descargar la imagen de ubuntu:</h4>
            <p>
              Puedes optar por la versión LTS (Long Term Support) para obtener
              actualizaciones de soporte a largo plazo. Visita el siguiente link
              para descargar la imagen de ubuntu:
            </p>
            <Link
              isExternal
              href="https://ubuntu.com/download/desktop"
              className="font-bold"
              showAnchorIcon
            >
              https://ubuntu.com/download/desktop
            </Link>
          </article>
          <article>
            <h4>2. Crear un medio de instalación:</h4>
            <p>
              Conectar una USB vacía de al menos 4 GB de capacidad, para crear
              un medio de instalación en nuestro caso usaremos Rufus, descarga y
              ejecuta Rufus desde el siguiente enlace:
            </p>
            <Link
              isExternal
              href="https://rufus.ie/es/"
              className="font-bold"
              showAnchorIcon
            >
              https://rufus.ie/es/
            </Link>
            <Card radius="md" className="my-2 p-4">
              <p>
                <span className="font-bold">Importante</span> Esto borrara todos
                los datos de la memoria usb si se tienen datos importantes hacer
                un respaldo.
              </p>
              <p>
                Abre rufus has click en el botón SELECT para elegir la iso de
                ubuntu que descargaste previamente, en el apartado de Device
                selecciona tu USB si es que no se selecciono automáticamente y
                por ultimo has click en START.
              </p>
            </Card>

            <Card radius="md" className="my-2 flex p-4">
              <p>
                <span className="font-bold">Importante </span>en el apartado de
                Partition scheme seleccionar
                <span className="font-bold"> GPT </span>si usas un pc mas
                actual. De lo contrario
                <span className="font-bold"> MBR.</span>
              </p>
            </Card>
          </article>
          <article>
            <h4>3. Instalar ubuntu desde la USB:</h4>
            <p>
              Si usas windows puede que sea necesario desactivar el arranque
              rápido para ello:
            </p>
            <ul className="list-inside list-decimal">
              <li>
                Ve al Panel de control y selecciona{' '}
                <span className="font-bold">Opciones de energía</span>
              </li>
              <li>
                Elige{' '}
                <span className="font-bold">
                  Cambiar las acciones de los botones de inicio/apagado
                </span>
              </li>
              <li>
                Haz clic en{' '}
                <span className="font-bold">
                  Cambiar la configuración actualmente no disponible
                </span>
              </li>
              <li>
                En <span className="font-bold">Configuración de apagado</span>,
                desmarca la casilla{' '}
                <span className="font-bold">Activar inicio rápido</span>
              </li>
            </ul>
            <p>
              Reinicia tu pc pulsando la tecla F2 o F6 para acceder a la bios.
              Busca la opción de boot y selecciona la USB como primera opción de
              inicio esto se hace con las teclas f5(arriba), f6(abajo) y por
              ultimo guarda y sal con f10.
            </p>
            <Card
              radius="md"
              className="my-2 flex w-full flex-col items-center p-4 sm:flex-row"
            >
              <p>
                <span className="font-bold">Consejo </span>
                Si no aparece la bios busca en google que tecla ingresa a la
                bios según tu pc.
              </p>
            </Card>
          </article>
          <article>
            <h4>4. Primer inicio de ubuntu.</h4>
            <p>
              Inicia el sistema y te aparecerá la pantalla de instalación de
              ubuntu, selecciona la opción Probar o Instalar ubuntu.
            </p>
          </article>
          <article>
            <h4>5. Instalador de ubuntu.</h4>
            <Card radius="md" className="my-2 p-4">
              <p>
                <span className="font-bold">Muy Importante: </span>
                En algún punto el instalador te pedirá el tipo de instalación si
                quieres mantener windows y hacer lo que se conoce como
                <span className="font-bold">
                  {' '}
                  DualBoot(tener dos sistemas en tu pc){' '}
                </span>
                Asegúrate de marcar la opción de
                <span className="font-bold">
                  {' '}
                  Instalar Ubuntu junto a Windows 10{' '}
                </span>
                ya que de lo contrario borraras windows y toda tu información se
                perderá.
              </p>
            </Card>
            <p>
              El instalador de ubuntu es bastante intuitivo, solo sigue las
              instrucciones selecciona según tu preferencias y no tendrás
              problemas.
            </p>
          </article>
        </aside>
        <aside className="flex flex-col gap-4 lg:w-1/2">
          <article>
            <h3>Instalación en maquina virtual.</h3>
            <p>
              La opción de instalarlo mediante una maquina virtual es tener
              básicamente un ubuntu dentro de tu windows o macOS.
            </p>
            <Card radius="md" className="my-2 p-4">
              <p>
                El rendimiento suele ser mucho más lento y viene dictado por el
                sistema anfitrión, lo que puede limitar las capacidades y la
                eficiencia.
              </p>
            </Card>
          </article>
          <article>
            <h4>1. Descargar la iso de ubuntu</h4>
            <p>Visita el siguiente link para descargar la imagen de ubuntu:</p>
            <Link
              isExternal
              href="https://ubuntu.com/download/desktop"
              className="font-bold"
              showAnchorIcon
            >
              https://ubuntu.com/download/desktop
            </Link>
          </article>
          <article>
            <h4>2. Descargar e instalar virtualBox.</h4>
            <p>Descarga e instala VirtualBox desde el siguiente enlace:</p>
            <Link
              isExternal
              href="https://www.virtualbox.org/wiki/Downloads"
              className="font-bold"
              showAnchorIcon
            >
              https://www.virtualbox.org/
            </Link>
          </article>
          <article>
            <h4>3. Configurar la maquina virtual</h4>
            <p>
              Después de instalar virtualBox, ábrelo utilizando el acceso
              directo del escritorio y selecciona la opción Nueva para crear una
              nueva máquina virtual.
            </p>
            <ul className="list-inside list-decimal">
              <li>
                VirtualBox te pedirá que introduzcas el nombre de la máquina
                virtual junto con el tipo y la versión que vayas a usar, el
                nombre puede ser cualquiera, en tipo selecciona linux y en
                version Ubuntu(64-bit) y da click en Siguiente.
              </li>
              <li>
                Selecciona la cantidad de RAM a asignar. Te recomendamos asignar
                la mitad de la cantidad del sistema principal. Por ejemplo, si
                tu ordenador tiene 8 GB de RAM, asigna 4 GB a la máquina virtual
                y da click en Siguiente.
              </li>
              <li>
                Ahora se te pedirá configurar el disco duro las opciones que
                recomendamos son
                <ul className="list-inside list-disc">
                  <li>Disco Duro: Crear un disco virtual ahora</li>
                  <li>Tipo de Archivo:VDI </li>
                  <li>Almacenamiento:Reservado dinámicamente</li>
                  <li>Tamaño: 30gb</li>
                </ul>
              </li>
            </ul>
          </article>
          <article>
            <h4>3. Seleccionar la iso de ubuntu</h4>
            <p>
              Selecciona Configuración luego Almacenamiento y pulsa donde dice
              vacío, justo debajo de Controlador: IDE. Pulsa en el icono del
              disco azul y has click en{' '}
              <span className="font-bold">
                Seleccionar un archivo de disco.
              </span>{' '}
              Busca el archivo de Ubuntu que descargaste anteriormente y pulsa
              en Aceptar.
            </p>
            <p>
              Una vez hecho esto podemos dar click en Iniciar y seguir las
              instrucciones del instalador de ubuntu
            </p>
          </article>
          <Question question={question1} />
        </aside>
      </main>
    </section>
  )
}

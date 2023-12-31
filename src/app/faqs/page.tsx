'use client'
import Contact from '@/app/components/Contact'
import { Accordion, AccordionItem, Card } from '@nextui-org/react'
import Image from 'next/image'
import { Toaster } from 'sonner'

const frequentQuestions = [
  {
    question: '¿Qué es Linux y por qué debería aprenderlo?',
    answer:
      'Linux es un sistema operativo de código abierto ampliamente utilizado. Deberías aprenderlo porque es potente, seguro y te brinda control total sobre tu computadora. Aprender Linux te proporcionará habilidades valiosas para administrar sistemas, programar y trabajar en entornos de desarrollo. Linux es una plataforma versátil y poderosa que te permite personalizar y optimizar tu sistema de acuerdo a tus necesidades y preferencias. A medida que aprendes Linux, descubrirás un mundo de posibilidades en el desarrollo de software, administración de servidores y seguridad informática.',
  },
  {
    question: '¿Cómo puedo empezar a aprender Linux?',
    answer:
      'Para empezar a aprender Linux, puedes instalar una distribución de Linux en tu computadora o en una máquina virtual. Algunas distribuciones populares para principiantes incluyen Ubuntu y Linux Mint. Luego, puedes comenzar a familiarizarte con la línea de comandos de Linux, que es una herramienta poderosa para administrar tu sistema. Hay muchos recursos gratuitos disponibles en línea para aprender Linux, incluyendo tutoriales, guías y cursos. También puedes considerar obtener una certificación en Linux, como la certificación LPIC, que puede ser valiosa para tu carrera profesional.',
  },
  {
    question:
      '¿Cuál es la diferencia entre Linux y otras plataformas como Windows o macOS?',
    answer:
      'Linux es gratuito, de código abierto y altamente personalizable, mientras que Windows y macOS son sistemas operativos comerciales. Linux es conocido por su estabilidad y seguridad. La principal diferencia radica en la filosofía de código abierto de Linux, que permite a los usuarios modificar y personalizar su sistema a su gusto. A diferencia de Windows y macOS, no estás limitado por restricciones de licencia y puedes adaptar tu sistema Linux para satisfacer tus necesidades específicas.',
  },
  {
    question:
      '¿Necesito experiencia previa en informática para aprender Linux?',
    answer:
      'No, no necesitas experiencia previa. Linux es accesible para principiantes, y puedes aprender gradualmente a medida que adquieres experiencia. Si eres nuevo en Linux, puedes comenzar con distribuciones amigables para principiantes como Ubuntu y explorar recursos en línea, tutoriales y comunidades de Linux para aprender y resolver tus dudas. Linux es una plataforma acogedora para quienes se inician en la informática y te brinda la oportunidad de aprender mientras avanzas en tu viaje de aprendizaje.',
  },
  {
    question:
      '¿Cuáles son los comandos básicos de la terminal que debo conocer?',
    answer:
      'Los comandos básicos de la terminal que debes conocer incluyen ls (listar archivos y directorios), cd (cambiar de directorio), pwd (mostrar directorio actual), mkdir (crear directorios), touch (crear archivos vacíos) y rm (eliminar archivos o directorios). Estos comandos son esenciales para la navegación y gestión de archivos en un entorno de línea de comandos de Linux. Dominar estos comandos te permitirá realizar tareas de administración de archivos y directorios de manera eficiente.',
  },
  {
    question:
      '¿Es Linux adecuado para tareas de desarrollo, servidores web o administración de sistemas?',
    answer:
      'Sí, Linux es ampliamente utilizado en estas áreas debido a su estabilidad y flexibilidad. Los desarrolladores utilizan Linux para programar y desarrollar software, ya que ofrece un entorno de desarrollo sólido. Además, Linux es la elección preferida para servidores web y administración de sistemas debido a su seguridad y capacidades de gestión avanzadas. Si estás interesado en la programación, la administración de servidores o la seguridad informática, Linux es una plataforma ideal para desarrollar tus habilidades y proyectos.',
  },
  {
    question:
      '¿Cómo puedo contribuir a la comunidad de código abierto en Linux?',
    answer:
      'Puedes contribuir a la comunidad de código abierto en Linux de diversas formas. Puedes colaborar en proyectos de código abierto, contribuir con código, informes de errores o parches, traducir software a otros idiomas, documentar proyectos o ayudar en la promoción de proyectos. Comienza por unirte a proyectos que te interesen y busca oportunidades para contribuir de manera activa. Tu participación en la comunidad de código abierto es una forma valiosa de mejorar el software libre y de código abierto para todos.',
  },
  {
    question: '¿Dónde puedo obtener soporte técnico si encuentro problemas?',
    answer:
      'Puedes buscar ayuda en foros en línea, comunidades de Linux y consultar la documentación oficial. Comunidades como Ask Ubuntu, Stack Overflow y foros de distribuciones específicas son excelentes recursos para obtener ayuda. Además, muchas distribuciones de Linux ofrecen soporte técnico a través de sus sitios web y foros. También puedes encontrar documentación detallada en línea que te ayudará a solucionar problemas y aprender más sobre Linux. Si te enfrentas a problemas técnicos o tienes preguntas, la comunidad de Linux es solidaria y está dispuesta a ayudarte en tu viaje de aprendizaje.',
  },
  {
    question: '¿Es posible utilizar aplicaciones de Windows en Linux?',
    answer:
      'Sí, algunas aplicaciones de Windows se pueden ejecutar en Linux utilizando emuladores, software de virtualización o herramientas de compatibilidad. Wine es una popular capa de compatibilidad que permite ejecutar aplicaciones de Windows en sistemas Linux. Además, las máquinas virtuales como VirtualBox te permiten ejecutar Windows en una máquina virtual dentro de Linux. Sin embargo, no todas las aplicaciones de Windows son compatibles, por lo que es importante verificar la compatibilidad de la aplicación que deseas utilizar en Linux. Algunas aplicaciones de Windows funcionarán sin problemas en Linux, mientras que otras pueden requerir configuraciones adicionales.',
  },
]

export default function Page(): JSX.Element {
  return (
    <>
      <Toaster position="top-center" />
      <section className="flex flex-col gap-4">
        <h2 className="">Preguntas Frecuentes</h2>
        <main className="flex flex-col gap-8">
          <section className="flex w-full flex-col gap-4 2xl:w-1/2">
            <Accordion>
              {frequentQuestions.map((item, index) => (
                <AccordionItem key={index} title={item.question}>
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          <section className="right-20 top-44 flex flex-col items-center justify-between gap-8 2xl:fixed 2xl:w-2/5 2xl:gap-4">
            <Card className="relative px-4 py-8 text-center">
              <h3>Acerca de mi</h3>
              <p>
                Soy un estudiante de la carrera de ingeniería en sistemas
                computacionales, el desarrollo web es uno de mis hobbies espero
                que la pagina te guste :)
              </p>
              <Image
                src="/images/profileImage.png"
                alt="imagen de perfil"
                width={64}
                height={64}
                className="absolute bottom-0 left-0 h-auto w-12"
              />
            </Card>
            <Contact />
          </section>
        </main>
      </section>
    </>
  )
}

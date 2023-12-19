import Question from '@/app/components/Question'
export default function Question1(): JSX.Element {
  const question1 = {
    title: '¿Qué es una distribución de Linux?',
    options: [
      {
        answer:
          'Un tipo de antivirus especializado en la detección de malware en sistemas Linux.',
        isCorrect: false,
      },
      {
        answer:
          'Un conjunto de aplicaciones preinstaladas en una computadora que utiliza el sistema operativo Linux.',
        isCorrect: false,
      },
      {
        answer:
          'Una partición del disco duro destinada exclusivamente a la instalación de programas en un sistema Linux.',
        isCorrect: false,
      },
      {
        answer:
          'Una variante del sistema operativo Linux que incluye el kernel de Linux y un conjunto de herramientas y aplicaciones específicas.',
        isCorrect: true,
      },
    ],
  }
  return <Question question={question1} />
}

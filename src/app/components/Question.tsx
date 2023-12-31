'use client'
import { type Option, type QuestionProps } from '@/app/interfaces/intefaces'
import { Button, Card } from '@nextui-org/react'
import clsx from 'clsx'
import { useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import { MdError } from 'react-icons/md'
import { VscDebugRestart } from 'react-icons/vsc'

export default function Question({ question }: QuestionProps): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const [showResult, setShowResult] = useState<boolean>(false)
  const [isCorrect, setIsCorrect] = useState<boolean>(false)

  const verifyAnswer = (): void => {
    if (selectedOption != null) {
      setShowResult(true)
      setIsCorrect(selectedOption.isCorrect)
    }
  }

  const retry = (): void => {
    setSelectedOption(null)
    setShowResult(false)
  }

  return (
    <Card className="flex h-full min-h-[28rem] flex-col items-center justify-between gap-4 p-4">
      {showResult ? (
        <>
          <span></span>
          <p className="text-center text-2xl font-bold">
            {isCorrect ? (
              <span className="flex flex-col-reverse items-center justify-center gap-1 text-emerald-600">
                <FaCircleCheck className="h-12 w-12" />
                Respuesta <br /> correcta
              </span>
            ) : (
              <>
                <span className="text-md flex flex-col-reverse items-center justify-center gap-1 text-red-600 md:flex-row">
                  <MdError className="h-12 w-12" />
                  Respuesta <br /> incorrecta
                </span>
                <span></span>
              </>
            )}
          </p>
        </>
      ) : (
        <>
          <h4 className="font-bold">{question.title}</h4>
          {question.options.map((option, index) => (
            <Card
              isPressable
              isHoverable
              className={clsx(
                'w-full cursor-pointer p-4 hover:bg-gray-200 dark:hover:bg-zinc-600',
                {
                  'bg-gray-300 dark:bg-zinc-700':
                    !showResult && selectedOption === option,
                },
              )}
              key={index}
              onPress={() => {
                setSelectedOption(option)
              }}
            >
              {option.answer}
            </Card>
          ))}
        </>
      )}
      {!showResult && (
        <Button
          color="primary"
          className="w-full rounded-md bg-rose-600 py-2 font-bold text-white"
          onClick={verifyAnswer}
        >
          {}
          Verificar respuesta
        </Button>
      )}
      {showResult && !isCorrect && (
        <Button
          onClick={retry}
          color="primary"
          endContent={<VscDebugRestart />}
          className="flex w-full items-center justify-center gap-1 rounded-md bg-rose-600 py-2 text-lg font-bold text-white"
        >
          Reintentar
        </Button>
      )}
      {showResult && isCorrect && (
        <p className="text-center font-bold text-emerald-600">
          Buen trabajo, sigue así.
        </p>
      )}
    </Card>
  )
}

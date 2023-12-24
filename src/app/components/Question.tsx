'use client'
import { type Option, type QuestionProps } from '@/app/interfaces/intefaces'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button, Card } from '@nextui-org/react'
import clsx from 'clsx'
import { useState } from 'react'

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
      {!showResult && <h3>{question.title}</h3>}
      {!showResult ? (
        question.options.map((option, index) => (
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
        ))
      ) : isCorrect ? (
        <p className="flex items-center justify-center gap-1 text-2xl font-bold text-emerald-500">
          <Icon
            icon="material-symbols:check-circle-outline-rounded"
            className="h-10 w-10 text-emerald-500"
          />
          Respuesta correcta
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="flex w-full items-center justify-center gap-2 text-2xl font-bold text-red-500">
            <Icon
              icon="pajamas:error"
              className="h-10 w-10 text-center text-red-500"
            />
            Respuesta incorrecta
          </p>
          <Button
            onClick={retry}
            color="primary"
            endContent={<Icon icon="pajamas:retry" />}
            className="flex w-full items-center justify-center gap-1 rounded-md bg-red-500 py-2 text-lg font-bold text-white"
          >
            Reintentar
          </Button>
        </div>
      )}
      {!showResult && (
        <Button
          color="primary"
          className="w-full rounded-md bg-red-500 py-2 font-bold text-white"
          onClick={verifyAnswer}
        >
          Verificar respuesta
        </Button>
      )}
    </Card>
  )
}

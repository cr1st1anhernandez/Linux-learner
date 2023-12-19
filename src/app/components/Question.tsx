'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import clsx from 'clsx'
import { useState } from 'react'

interface QuestionProps {
  question: {
    title: string
    options: Option[]
  }
}

interface Option {
  answer: string
  isCorrect: boolean
}

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
    <div className="flex h-full min-h-[38rem] flex-col items-center justify-center gap-4 rounded-md border-2 border-zinc-300 p-4 dark:border-black dark:shadow-md dark:shadow-black">
      {!showResult && (
        <header className="flex items-start gap-1">
          <h3>{question.title}</h3>
        </header>
      )}
      {!showResult ? (
        question.options.map((option, index) => (
          <button
            className={clsx(
              'w-full cursor-pointer rounded-md border-2 border-gray-200 p-4 transition-all duration-300 ease-in-out hover:bg-gray-100',
              {
                'bg-gray-300': !showResult && selectedOption === option,
              },
            )}
            key={index}
            onClick={() => {
              setSelectedOption(option)
            }}
          >
            {option.answer}
          </button>
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
          <button
            onClick={retry}
            className="flex w-full items-center justify-center gap-1 rounded-md bg-red-500 py-2 text-lg font-bold text-white"
          >
            Reintentar
            <Icon icon="pajamas:retry" className="h-auto w-4" />
          </button>
        </div>
      )}
      {!showResult && (
        <button
          className="w-full rounded-md bg-red-500 py-2 font-bold text-white"
          onClick={verifyAnswer}
        >
          Verificar respuesta
        </button>
      )}
    </div>
  )
}

export interface DistroProps {
  name: string
  text: string
  icon: JSX.Element
  url: string
}

export interface QuestionProps {
  question: {
    title: string
    options: Option[]
  }
}

export interface Option {
  answer: string
  isCorrect: boolean
}

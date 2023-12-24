export interface DistroProps {
  name: string
  text: string
  icon: string
  url: string
  color: string
  colorHover: string
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

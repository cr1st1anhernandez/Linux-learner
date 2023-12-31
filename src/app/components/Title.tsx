import { ButtonArrow } from '@/app/components/ButtonArrow'

interface TitleProps {
  title: string
  previousRoute: string
  nextRoute: string
}

export default function Title({
  title,
  previousRoute,
  nextRoute,
}: TitleProps): JSX.Element {
  return (
    <nav className="flex flex-col-reverse items-end gap-2 sm:flex-row sm:items-center">
      <h2 className="w-full">{title}</h2>
      <div className="flex w-fit gap-2">
        <ButtonArrow iconPosition="back" route={previousRoute} />
        <ButtonArrow iconPosition="forward" route={nextRoute} />
      </div>
    </nav>
  )
}

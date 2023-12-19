import { NavigateButtton } from '@/app/components/NavigateButton'

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
    <>
      <h1 className="w-full">{title}</h1>
      <div className="flex w-fit gap-2">
        <NavigateButtton text="anterior" route={previousRoute} />
        <NavigateButtton text="siguiente" route={nextRoute} />
      </div>
    </>
  )
}

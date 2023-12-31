import { ArrowLeft } from '@/app/icons/ArrowLeft'
import { ArrowRight } from '@/app/icons/ArrowRight'
import { Button, Link } from '@nextui-org/react'

interface ButtonArrowProps {
  iconPosition: string
  route: string
}

export const ButtonArrow = ({
  iconPosition,
  route,
}: ButtonArrowProps): JSX.Element => {
  return (
    <Button href={route} as={Link} size="sm" color="primary">
      {iconPosition === 'back' ? (
        <ArrowLeft className="text-xl" />
      ) : (
        <ArrowRight className="text-xl" />
      )}
    </Button>
  )
}

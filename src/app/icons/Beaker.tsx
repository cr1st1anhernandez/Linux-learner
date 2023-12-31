import { type SVGProps } from 'react'
export function Beaker(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM3 3h18v2c-1.1 0-2 .9-2 2v5a6.005 6.005 0 0 0-5.2 9H7c-1.1 0-2-.9-2-2V7c0-1.1-.9-2-2-2zm4 6v1h3V9zm0 2v1h3v-1zm3 5v-1H7v1zm2-2v-1H7v1zm0-6V7H7v1z"
      />
    </svg>
  )
}

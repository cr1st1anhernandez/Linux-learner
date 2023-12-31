import { type SVGProps } from 'react'
export function LogIn(props: SVGProps<SVGSVGElement>): JSX.Element {
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
        d="M13 21q-.425 0-.712-.288T12 20q0-.425.288-.712T13 19h6V5h-6q-.425 0-.712-.288T12 4q0-.425.288-.712T13 3h6q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-1.825-8H4q-.425 0-.712-.288T3 12q0-.425.288-.712T4 11h7.175L9.3 9.125q-.275-.275-.275-.675t.275-.7q.275-.3.7-.313t.725.288L14.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.712.288T9.3 16.25q-.275-.3-.262-.712t.287-.688z"
      />
    </svg>
  )
}

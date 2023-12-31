import { type SVGProps } from 'react'
export function Check(props: SVGProps<SVGSVGElement>): JSX.Element {
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
        d="m10 14.312l6.246-6.266q.139-.14.353-.14t.355.139q.14.139.14.354q0 .214-.14.355l-6.389 6.37q-.242.241-.565.241q-.323 0-.565-.242l-2.389-2.37q-.14-.138-.14-.352t.139-.355q.139-.14.354-.14q.214 0 .355.14z"
      />
    </svg>
  )
}

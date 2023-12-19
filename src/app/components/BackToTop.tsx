'use client'

import { FaArrowUp } from 'react-icons/fa6'

export default function BackToTop() {
  return (
    <button
      className="fixed bottom-2 right-8 z-50 rounded-full bg-red-500 p-2 text-white shadow-sm"
      onClick={() => window.scrollTo(0, 0)}
    >
      <FaArrowUp />
    </button>
  )
}

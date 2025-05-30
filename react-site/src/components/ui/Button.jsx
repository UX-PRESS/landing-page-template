import React from 'react'

export default function Button({ children, className }) {
  return (
    <button
      className={`bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition ${className}`}
    >
      {children}
    </button>
  )
}
import React from 'react'

export default function Card({ title, description }) {
  return (
    <div className="rounded-2xl shadow-md p-4 space-y-2 bg-white">
      <h2 className="text-xl font-semibold text-green-800">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
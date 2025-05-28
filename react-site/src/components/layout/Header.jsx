import React from 'react'

export default function Header() {
  return (
    <header className="bg-green-800 text-white p-4 flex justify-between">
      <nav className="space-x-4">
        <a href="#features" className="hover:underline">Features</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  )
}

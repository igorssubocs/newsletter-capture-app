import React from 'react'
import { Link } from 'react-router-dom'
import Theme from './ui/Theme'

export default function Header() {
  return (
    <header className="w-full text-neutral-800 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">
        LOGO
      </Link>

      <Theme />
    </header>
  )
}

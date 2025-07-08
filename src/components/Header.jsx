import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Theme from './ui/Theme'
import { ThemeContext } from './ui/ThemeContext'
import { getTextColorHeader } from '../utils/themeClasses'

export default function Header() {
	const { theme } = useContext(ThemeContext)

	const textColor = getTextColorHeader(theme)

	return (
	<header className={`w-full flex justify-between items-center ${textColor}`}>
		<Link to="/" className="font-bold text-lg uppercase">
			Newsletter
		</Link>

		<Theme />
	</header>
	)
}

import React, { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const themes = [
	// 'colorful', 
	'light', 
	'dark'
]

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function Theme() {
	const { theme, setTheme } = useContext(ThemeContext)

	return (
		<div className="inline-flex gap-2 rounded-full bg-neutral-200 p-1">
			{themes.map(t => (
				<button
					key={t}
					onClick={() => setTheme(t)}
					className=
					{`
						px-6
						py-3
						rounded-full
						transition
						${
							theme === t 
							? 'bg-neutral-700 text-white shadow-md' 
							: 'text-neutral-700 hover:bg-neutral-100'
						}
						focus:outline-none
						focus:ring-2
						focus:ring-neutral-600
					`}
					aria-pressed={theme === t}
				>
					{capitalize(t)}
				</button>
			))}
		</div>
	)
}

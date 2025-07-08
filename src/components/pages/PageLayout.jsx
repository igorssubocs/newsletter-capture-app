import React, { useContext } from 'react'
import { ThemeContext } from '../ui/ThemeContext'
import Header from '../Header'
import Form from '../Form'
import Footer from '../Footer'

export default function PageLayout() {
	const { theme } = useContext(ThemeContext)

	const bgColorClass = (() => {
		switch (theme) {
			case 'light':
				return 'bg-gradient-to-r from-white via-neutral-200 to-white'
			case 'dark':
				return 'bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-950'
			case 'colorful':
				return 'bg-gradient-to-r from-pink-200 via-yellow-50 to-indigo-200'
			default:
				return 'bg-neutral-100'
		}
	})()

  	return (
		<div className={`w-full min-h-screen ${bgColorClass} flex justify-center`}>
			<div className="container flex flex-col min-h-screen">
				<header className="pt-6">
					<Header />
				</header>

				<main className="flex-grow flex items-center justify-center">
					<Form />
				</main>

				<footer className="pb-6">
					<Footer />
				</footer>
			</div>
		</div>
	)
}
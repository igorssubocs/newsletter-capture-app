// Footer
export function getIconColorClass(theme) {
	switch (theme) {
		case 'light':
			return 'text-neutral-700 hover:text-neutral-900 focus:ring-neutral-900'
		case 'colorful':
			return 'text-pink-600 hover:text-yellow-500 focus:ring-yellow-500'
		case 'dark':
		default:
			return 'text-white hover:text-neutral-400 focus:ring-white'
	}
}

// Footer
export function getTextColorClass(theme) {
	switch (theme) {
		case 'light':
			return 'text-neutral-700'
		case 'colorful':
			return 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-indigo-500'
		case 'dark':
		default:
			return 'text-white'
	}
}

// Form
export function getTextColor(theme) {
	return theme === 'dark'
		? 'text-neutral-200'
		: theme === 'colorful'
		? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-indigo-500'
		: 'text-neutral-700'
}

export function getSubTextColor(theme) {
	return theme === 'dark'
		? 'text-neutral-400'
		: theme === 'colorful'
		? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-lime-400 to-cyan-500'
		: 'text-neutral-600'
}

export function getInputBg(theme) {
	return theme === 'dark'
		? 'bg-neutral-800 text-white placeholder-neutral-400 border-neutral-700'
		: theme === 'colorful'
		? 'bg-white text-black placeholder-pink-400 border-pink-300'
		: 'bg-white text-black placeholder-neutral-500 border-neutral-300'
}

export function getFocusRing(theme) {
	return theme === 'dark'
		? 'focus:ring-neutral-500'
		: theme === 'colorful'
		? 'bg-gradient-to-r from-pink-500 via-yellow-400 to-indigo-500 hover:from-pink-600 hover:via-yellow-500 hover:to-purple-600 text-white'
		: 'focus:ring-neutral-600'
}

export function getButtonBg(theme) {
	return theme === 'dark'
		? 'bg-neutral-700 hover:bg-neutral-800 text-white'
		: theme === 'colorful'
		? 'bg-gradient-to-r from-pink-500 via-yellow-400 to-indigo-500 hover:from-pink-600 hover:via-yellow-500 hover:to-purple-600 text-white'
		: 'bg-neutral-700 hover:bg-neutral-800 text-white'
}

// Header
export function getTextColorHeader(theme) {
	switch (theme) {
		case 'dark':
			return 'text-white'
		case 'colorful':
			return 'text-pink-900'
		default:
			return 'text-neutral-800'
	}
}

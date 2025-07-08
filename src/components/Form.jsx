import React, { useState, useContext } from 'react'
import { ThemeContext } from './ui/ThemeContext'
import { getTextColor, getSubTextColor, getInputBg, getFocusRing, getButtonBg } from '../utils/themeClasses'

export default function Form() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const { theme } = useContext(ThemeContext);

	const textColor = getTextColor(theme)
	const subTextColor = getSubTextColor(theme)
	const inputBg = getInputBg(theme)
	const focusRing = getFocusRing(theme)
	const buttonBg = getButtonBg(theme)

	const handleSubmit = (e) => {
		e.preventDefault();

		const emailRegex = /\S+@\S+\.\S+/;
		if (!emailRegex.test(email)) {
			setError('Please enter your email address.');
			return;
		}

		setError('');
	};

	return (
		<div className="text-center">
			<div className="max-w-xl mx-auto px-4 mb-10">
				<h1 className={`font-black text-4xl mb-5 ${textColor}`}>
					Subscribe to Our Newsletter
				</h1>
				<p className={`${subTextColor}`}>
					You’ve just joined a community that values fresh insights, 
					expert tips, and exclusive updates. Expect high-quality content 
					straight to your inbox — no spam, just value. 
					Stay tuned — we’re just getting started.
				</p>
			</div>

			<div className="max-w-2xl mx-auto px-4">
				<form onSubmit={handleSubmit} className="space-y-3">
					<div className="relative">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full py-4 pl-5 pr-40 text-base border rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-600"
							placeholder="Enter your email address"
							required
						/>
						<button
							type="submit"
							className={`flex items-center gap-2 absolute top-1/2 right-2 transform -translate-y-1/2 font-semibold px-6 py-3 rounded-full transition text-base ${buttonBg}`}
							>
							Subscribe Now
							<svg width="16" height="12" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13 5L9.66667 1M13 5L9.66667 9M13 5H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
					</div>
					{error && <p className="text-red-500 text-sm text-left pl-2">{error}</p>}
				</form>
			</div>
		</div>
  	);
}

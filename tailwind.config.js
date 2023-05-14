module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			primary: 'Orbitron',
			secondary: 'Rajdhani',
			tertiary: 'Aldrich'
		},
		container: {
			padding: {
				DEFAULT: '15px'
			}
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px'
		},
		extend: {
			colors: {
				primary: '#0a0a0a',
				accent: '#94d82d'
			},
			keyframes: {
				fullSpin: {
					'100%': {
						transform: 'rotate(-360deg)'
					}
				}
			},
			animation: {
				fullSpin: 'fullSpin 3s linear infinite'
			},
			backgroundImage: {
				avatar: "url('./assets/profile.png')"
			}
		}
	},
	plugins: []
};

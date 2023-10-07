import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		colors: {
			'primary': '#635FC7',
			'secondary': '#FFFFFF',
			'gray': {
				100: '#F4F7FD',
				200: '#E4EBFA',
				300: '#828FA3',
				400: '#3E3F4E',
				500: '#2B2C37',
				600: '#20212C',
				700: '000112'
			},
			'white': "#FFFFFF"
		},
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				primary: '#0558EE',
        dark: '#050419',
				secondary: '#1BCBE7',
        'pale-sky': '#F7F7FF',
        grey: '#F4F4F4'
			},
			screens: {
				xxmobile: '361px',
				xmobile: '390px',
				mobile: '490px',
				lgMobile: '560px',
				xmd: '660px',
				xxmd: '690px',
				md: '840px',
				smLaptop: '920px',
				laptop: '1024px',
				xlaptop: '1070px',
				desktop: '1230px',
				lgDesktop: '1330px',
				xDesktop: '1400px',
				extraLarge: '2000px',
			},
      keyframes: {
        slide: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '33%': { transform: 'translateX(0)' },
          '66%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'slide': 'slide 12s linear infinite',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bright-blue': '#0065FF',
        'banana-yellow': '#f7d154',
        'blood-red': '#ec4c47',
        'ice-blue': '#f3f7ff',
        'white-two': '#fff',
        'white-three': '#f6f6f6',
        'steel': '#768095',
        'brownish-gray': '#616161',
        'brownish-gray-two': '#606060',
        'light-gray': '#A5ABB7',
        'ultra-gray': '#E0E0E0',
        'pale-gray': '#F3F4F6',
        'dark-blue': '#003E7E',
        'dark-blue-gray': '#1e2c4c',
        'blue-violet': '#6200ee',
        'blue-violet-2': '#5e35b1',
        'black-05': 'rgba(0, 0, 0, 0.5)',
        'black-38': 'rgba(0, 0, 0, 0.38)',
        'black-60': 'rgba(0, 0, 0, 0.60)',
        'black-87': 'rgba(0, 0, 0, 0.87)',
      },
      borderRadius: {
        'cards': '4px'
      },
      gridRow: {
        'span-18': 'span 18 / span 18'
      },
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}

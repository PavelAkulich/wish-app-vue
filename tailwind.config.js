/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        default: {
          DEFAULT: '#3e50cb',
          gradientLight: '#6e7275',
          gradientDark: '#2b3136',
          fontLight: '#c2cbe0',
          bg: '#E9EBFA',
          grey: '#edeef7'
        }
      }
    }
  },
  plugins: []
}

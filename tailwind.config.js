/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      ck: '860px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536',
    },
    fontFamily: {
      playfair: ['Playfair Display'],
      oswald: ['Oswald']
    }
  },
  plugins: [],
}

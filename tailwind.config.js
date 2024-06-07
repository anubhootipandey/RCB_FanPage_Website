/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rcbBlack: '#000000',
        rcbDarkRed: '#3D0000',
        rcbRed: '#950101',
        rcbBrightRed: '#FF0000',
      },
    },
  },
  plugins: [],
}


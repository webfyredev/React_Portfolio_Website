/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
    sm: '480px',   // small phones
    md: '768px',   // tablets
    lg: '1024px',  // laptops
    xl: '1280px',  // desktops
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
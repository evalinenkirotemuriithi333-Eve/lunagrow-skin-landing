/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F52BA',      // example primary
        secondary: '#F6A623',    // example secondary
        accent: '#E11D48',       // CTA
        neutralDark: '#111827',  // text
        neutralLight: '#F8FAFC'  // background
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}
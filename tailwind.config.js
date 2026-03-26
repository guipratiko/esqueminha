/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: '#05070D',
        navy: '#0B1633',
        neon: '#3B5BFF',
        electric: '#4F46E5',
        cloud: '#D9D9D9',
      },
      boxShadow: {
        glow: '0 0 40px rgba(59, 91, 255, 0.35)',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        water: {
          dark: '#0f172a',
          deep: '#0369a1',
          main: '#0ea5e9',
          light: '#38bdf8',
          cyan: '#06b6d4',
          teal: '#14b8a6',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow': 'flow 15s ease infinite alternate',
        'wave-parallax': 'move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.3' },
        },
        flow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'move-forever': {
          '0%': { transform: 'translate3d(-90px,0,0)' },
          '100%': { transform: 'translate3d(85px,0,0)' },
        },
      },
    },
  },
  plugins: [],
}

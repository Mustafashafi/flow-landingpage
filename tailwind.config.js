/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366F1', // indigo-500
          DEFAULT: '#4F46E5', // indigo-600
          dark: '#4338CA', // indigo-700
        },
        secondary: {
          light: '#8B5CF6', // violet-500
          DEFAULT: '#7C3AED', // violet-600
          dark: '#6D28D9', // violet-700
        },
        accent: {
          DEFAULT: '#22D3EE', // cyan-400
        },
        darkBg: '#0F172A', // slate-900
        lightBg: '#F8FAFC', // slate-50
        textDark: '#0F172A', // slate-900
        textLight: '#94A3B8', // slate-400
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}

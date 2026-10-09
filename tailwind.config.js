/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        finema: {
          darkGreen: "#1B6B2F",
          lightGreen: "#8CC63F",
          cream: "#FBF6EE",
          creamDark: "#F3EBDD",
          textDark: "#1E2A22",
          yellow: "#F2C230",
          mint: "#E6F2E8",
          cardBorder: "#E2D9C8",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'green-glow': '0 12px 35px rgba(27, 107, 47, 0.15)',
        'card-hover': '0 20px 40px rgba(27, 107, 47, 0.12)',
      },
      animation: {
        'bounce-slow': 'bounce 2.5s infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

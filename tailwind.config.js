/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textUnderlineOffset: {
        12: '12px',
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        'custom-violet': '#250436',
        'custom-violet-bright': '#391646',
        'custom-pink': '#f3b2d6',
        'custom-blurple': '#5032aa',
        'custom-lime': '#d9fda0',
      },

      borderRadius: {
        '48': '48px',
      },

      height: {
        'card': '38rem',
      },

      width: {
        'card': '32rem',
      },

      keyframes: {
        balls1: {
          '0%, 100%': { transform: 'translateY(1rem)' },
          '50%': { transform: 'translateY(-1rem)' },
        },
        balls2: {
          '0%, 100%': { transform: 'translateY(-2rem)' },
          '50%': { transform: 'translateY(2rem)' },
        }
      },

      animation: {
        balls1: 'balls1 5s ease-in-out infinite',
        balls2: 'balls2 6s ease-in-out infinite',
      }

    },
  },
  plugins: [],
}


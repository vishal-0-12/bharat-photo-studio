/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf7ef',
          100: '#f5ebd7',
          200: '#ecd9ad',
          300: '#e0c07a',
          400: '#d4a84a',
          500: '#c89a3e',
          600: '#b88532',
          700: '#9a6c2b',
          800: '#7e5526',
          900: '#6b4722'
        },
        maroon: {
          50: '#fdf3f3',
          100: '#fae3e3',
          200: '#f5c8c8',
          300: '#eca0a0',
          400: '#df6b6b',
          500: '#cc4747',
          600: '#b53030',
          700: '#8a2525',
          800: '#722222',
          900: '#5e2020',
          950: '#3a0f0f'
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#faf2e0',
          300: '#f5e8c8',
          400: '#eeddb0'
        },
        charcoal: {
          700: '#2a2420',
          800: '#1f1b18',
          900: '#14110f',
          950: '#0d0b09'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite'
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-15px)'
          }
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% center'
          },
          '100%': {
            backgroundPosition: '200% center'
          }
        }
      }
    }
  },
  plugins: []
};

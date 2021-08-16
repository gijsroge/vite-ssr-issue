const colors = require('tailwindcss/colors')

const generateProseTheme = ({
  global = 'colors.black',
  headings = 'colors.primary.500',
  theme
} = {}) => {
  return {
    css: {
      color: theme(global),
      h1: {
        color: theme(headings)
      },
      h2: {
        color: theme(headings)
      },
      h3: {
        color: theme(headings)
      },
      h4: {
        color: theme(headings)
      },
      h5: {
        color: theme(headings)
      },
      h6: {
        color: theme(headings)
      },
      'ol > li::before': {
        color: theme(global)
      },
      'ul > li::before': {
        backgroundColor: theme(global)
      },
      hr: {
        borderColor: theme('colors.gray.400')
      },
      a: {
        color: theme('colors.primary.500'),
        '&:hover': {
          color: theme('colors.primary.400')
        }
      }
    }
  }
}

module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    whitelistPatterns: [/^m-/, /^mt-/, /^mb-/, /^ml-/, /^mr-/, /^my-/, /^mx-/],
    safelist: [
      'grid-cols-1',
      'grid-cols-2',
      'grid-cols-3',
      'grid-cols-4',
      'bg-primary',
      'bg-secondary',
      'text-white',
      'text-black',
      'max-w-screen-sm',
      'max-w-screen-md',
      'max-w-screen-lg',
      'max-w-screen-xl',
      'max-w-screen-2xl',
      'max-w-screen-3xl'
    ]
  },
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        black: generateProseTheme({ theme, headings: 'colors.black' }),
        DEFAULT: generateProseTheme({ theme })
      }),
      colors: {
        black: '#000',
        primary: {
          DEFAULT: '#012169',
          50: '#5287FD',
          100: '#3975FD',
          200: '#0652FD',
          300: '#0241CE',
          400: '#01319C',
          500: '#012169',
          600: '#011136',
          700: '#000104',
          800: '#000000',
          900: '#000000'
        },
        secondary: {
          DEFAULT: '#FFDD00',
          50: '#FFFCE5',
          100: '#FFF8CC',
          200: '#FFF199',
          300: '#FFEB66',
          400: '#FFE433',
          500: '#FFDD00',
          600: '#CCB100',
          700: '#998500',
          800: '#665800',
          900: '#332C00'
        },
        gray: {
          DEFAULT: '#F7F7F9',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#f7f7f9',
          500: '#Edf0f4',
          600: '#DADAE3',
          700: '#BDBDCD',
          800: '#A0A0B7',
          900: '#8282A2'
        },
        success: {
          DEFAULT: '#72D959',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#DCF5D6',
          300: '#B9ECAC',
          400: '#95E383',
          500: '#72D959',
          600: '#4FD030',
          700: '#3FA626',
          800: '#2F7D1C',
          900: '#205313'
        }
      },
      screens: {
        '3xl': '1700px'
      }
    }
  },
  variants: {
    extend: {
      fontSize: ['rfs']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-rfs')
  ]
}

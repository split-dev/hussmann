const { colors, fontSize } = require('tailwindcss/defaultTheme')

module.exports = {
  // prefix: 'tw-',
  theme: {
/*    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
*/   screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    colors: {
      primary: '#0065a4',
      black: colors.black,
      white: colors.white,
      gray: {
        '100': '#f7f7f7',
        '200': '#e6e6e6',
        '400': '#cbd5e0',
        '600': '#7d7d7d',
      },
      red: colors.red,
      transparent: colors.transparent,
    },
    inset: {
      '0': 0,
      '1/2': '50%'
    },
    fontFamily: {
      // 'museo': ['museo-sans', 'sans-serif'],
      'sans': ['Poppins', 'sans-serif']
    },
    fontSize: {
      ...fontSize,
      'xxs': '0.5rem',
      'tiny': '.75rem',
      'xs': '.8rem',
      'sm': '.8125rem',
      'base': '.875rem',
      'md': '1rem',
    },
    extend: {
      spacing: {
        '7px': '7px',
        '7': '1.75rem',
        '66': '16.56rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
        '143': '35rem',
        '160': '40rem',
        '9/20': '44%',
        '1/2': '50%',
      },
      boxShadow: {
        lg: '0 2px 20px rgba(0, 0, 0, 0.05)'
      },
      minHeight: {
        '250': '15.6rem',
        '300': '18.75rem',
      },
      maxWidth: {
        'xs': '4rem',
        'tiny': '12rem',
        '65': '16.25rem',
        'xs-2': '20rem',
      },
      maxHeight: {
        'xxl': '33.75rem',
        'xl': '26.875rem',
      },
      zIndex: {
        'popup-overlay': 59,
        'popup': 60,
      },
      lineHeight: {
        '12': '3rem',
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  corePlugins: {
    float: false,
    listStylePosition: false,
    // listStyleType: false,
    stroke: false,
    resize: true,
    tableLayout: false,
    userSelect: false,
    verticalAlign: false,
  },
  plugins: [
    function ({ addComponents, addUtilities }) {
      const newUtilities = {
        '.trans': {
          transitionDuration: '0.18s',
          transitionTimingFunction: 'ease',
        },
        '.trans-opacity': {
          transitionProperty: 'opacity',
        },
        '.trans-color': {
          transitionProperty: 'color',
        },
        '.trans-bg': {
          transitionProperty: 'background-color',
        },
        '.trans-border': {
          transitionProperty: 'border-color',
        },
        '.trans-transform': {
          transitionProperty: 'transform',
        },
        '.bg-primary-gradient': {
          backgroundImage: 'linear-gradient(45deg, #2a99d2 0%, #134a94 100%)',
        },
        '.light-overlay': {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        },
      }
      addUtilities(newUtilities)
      // Container with custom max-width
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1172px',
          },
        },
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }
      })
    },
  ],
}

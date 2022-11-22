/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': { 'max': '420px' },
      // => @media (min-width: 640px) { ... } 

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      'sm': '0.6875rem',
      'xs': '0.8125rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.75rem',
      '2.5xl': '1.5rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'lg': '1.125rem'
    },
    letterSpacing: {
      tightest: '-0.75px',
      tighter: '-0.625px',
      tight: '-0.5625px',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    borderRadius: {
      'minus': '-0.5rem',
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      width: {
        '9px': '0.5625rem',
        '18': '1.125rem',
        '1400px': '87.5rem',
        '723px': '45.1875rem',
        '200px': '12.5rem',
        '396px': '24.75rem',
        '66px': '4.125rem',
        '278px': '17.375rem',
        '122px': '7.625rem',
        '372px': '23.25rem',
        '402px': '25.125rem',
        '273px': '17.0625rem'

      },
      height: {
        '9px': '0.5625rem',
        '164': '10.25rem',
        '52': '3.25rem',
        '116px': '7.25rem',
        '206px': '12.875rem',
        '66px': '4.125rem',
        '436px': '27.25rem',
        '273px': '17.0625rem',
        '218px': '12,625rem',

      },
      minWidth: {
        '66px': '4.125rem',
        '396px': '24.75rem'
      },
      margin: {
        '15px': '0.937rem',
        '9px': '0.5625rem',
        '18px': '-1.125rem',
        '7px': '0.4375rem',
        '347': '21.7rem',
        '39': '2.4375rem',
        '86': '5.375rem',
        '26': '6.65rem',
        '90': '5.625rem',
        '62px': '3.875rem',
      },
      padding: {
        '7px': '0.45rem',
        '18px': '18px',
        '30px': '30px',
        '31px': '1.9375rem'
      },
      colors: {
        'grey': '#E6E9F2',
        'back': '#EFF0F5',
        'pag-blue': '#5876C5',
        'pag-media': '#55699E',
        'purple': '#9747ff',
        'dark': '#384564',
        'emp_text': "#55699E",
        'emp_bg': '#e1e6f4',
        'ben_text': '#988B49',
        'ben_bg': '#fff8d9',
        'ben_border': '#FFCF00',
        'square': '#81899d',
        'contacts_bg': '#2A3047',
        'round': '#202336'
      },
      spacing: {
        '62%': '62.7%',
        '52%': '52%',
        '42%': '42%',
        '30': '120px',
        '436': '436px',
        '112': '-112px',
        '9px': '-9px',
        '36': '-36px',
        '218px': '12,625rem',
        '212px': '212px',
        '72px': '72px',
        '139px': '139px',
        '90px': '90px'
      },
      boxShadow: {
        'map': '-25px -20px 0px 12px rgba(255, 255, 255, 0)',
      }
    },
  },
  plugins: [],
}

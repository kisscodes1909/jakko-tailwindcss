/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}', // Quét tất cả các tệp HTML và JS trong thư mục src
  ],
  theme: {
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '64px',
    },
    screens: {
      'xs': '320px',
      '2xs': '480px',
      'sm': '768px',
      'md': '992px',
      'lg': '1280px',
      'xl': '1440px',
    },
    extend: {
      // width: {
      //   'calc-full': 'calc(100% + 40px)',
      // },
      colors: {
        yellow: {
          500: '#CAA15F', // Extended yellow color
        },
        charcoal: '#4d4d4d',
      },
      lineHeight: {
        '28px': '28px',
        'base': '21px'
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


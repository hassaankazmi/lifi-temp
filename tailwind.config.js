/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      height: {
        'h-900': '780px',
        'h-910': '910px',
        'h-18' : '18px',
        'h-70' : '70px',

      },  
      width: {
        'w-70': '75px',
      }, 
    
      fontFamily: {
        'h-102': '700px',
        'h-900': '780px',
        'h-910': '910px',
      },    
      maxWidth: {
        'w-360': '360px',
        'w-1217': '1228px',
        'w-921': '921px',

      },
      fontSize: {
        f22: ['22px'],
        f23: ['23px'],
        f15: ['15px'],
        f11: ['11px'],
        'f140': ['9rem', {
          lineHeight: '8.5rem',
        }],
      },  
      colors: {
        gradientMain: 'linear-gradient(91deg, #03F6F4 41.95%, #9383FF 78.54%);',
        darkbluecolor:'#0f121a',
        lightgray:'#22232ac7',
        lightgray1:'#292929',
        lightgray2:'#1b1b1b',
        lightgray3:'#18191B',
        lightgray4:'#9b9b9b',
        logo:'#8b8c8e',
        darkpink:'#311c31',
        pink:'#fc72ff',
        cyan:'#03f6f4',
        purple:'#9383ff',
        yellow:'#ffd85a',
        lightyellow:'#e9ff7c', 
        bordergray:'#ffffff12',
        bordergray1:'#34373F', 
        darkbg:'#1d1d22'     
      },
    
      inset: {
        '34%': '34%',
        '45%': '45%',

      },
      // eslint-disable-next-line no-dupe-keys
      fontFamily: {
        'Lausanne': ['Lausanne'],
        'grok': ['cy_grotesk_key_regularregular'],
        'sans': ['Inter var'],
           },
        borderRadius: {
          'none': '0',
          'sm': '0.125rem',
          DEFAULT: '0.25rem',
          DEFAULT: '4px',
          'md': '0.375rem',
          'lg': '0.5rem',
          'full': '9999px',
          'large': '20px',
        },
        padding: {
          '9px': '9px',
          '14px': '14px',
          '110px': '110px',
        }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}


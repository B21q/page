import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#121013',
        'bg-alt': '#171518',
        'bg-alt-2': '#4B484C',
        'bg-thorium': '#24292F',
        igreen: '#9DC39E',
        igray: '#BABABA',
        'igray-10': '#333333',
        'igray-20': '#1D1D1D',
        thorium: '#1BE1BE',
        'ired-10': '#FF4141',
        'iblue-10': '#87ADEB',

        blue: '#313840',
        cyan: '#50E2EF',
        shadowb: '#1B1F25'
      },

      zIndex: {
        '-10': '-10'
      },

      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
        sora: ['Sora', 'sans-serif']
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
export default config;

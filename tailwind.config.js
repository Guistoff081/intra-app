/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './app/views/**/*.{html,html.erb,erb}',
    './app/views/devise/**/*.{html,html.erb,erb}',
    './app/frontend/components/**/*.{vue,js,ts,jsx,tsx}',
    './app/frontend/**/*.{vue,js,ts,jsx,tsx}',
    './app/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: [
        'BlinkMacSystemFont',
        'Avenir Next',
        'Avenir',
        'Nimbus Sans L',
        'Roboto',
        'Noto Sans',
        'Segoe UI',
        'Arial',
        'Helvetica',
        'Helvetica Neue',
        'sans-serif'
      ],
      mono: ['Consolas', 'Menlo', 'Monaco', 'Andale Mono', 'Ubuntu Mono', 'monospace']
    },
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        }
      }
    }
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('tailwind-children'),
    require('flowbite/plugin')
  ]
};

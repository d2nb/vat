import gridBg from './tw-plugin/grid-bg'

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false
  },
  content: ['./index.html', './src/**/*.{js,jsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: '#6366f1',
        'brand-50': '#eeeeff',
        'brand-100': '#e0e1ff',
        'brand-200': '#c7c8fe',
        'brand-300': '#a5a7fc',
        'brand-400': '#8184f8',
        'brand-500': '#6366f1',
        'brand-600': '#4649e5',
        'brand-700': '#383bca',
        'brand-800': '#3032a3',
        'brand-900': '#2e3081',
        'brand-950': '#1b1c4b'
      }
    }
  },
  plugins: [gridBg]
}

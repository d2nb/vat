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
        brand_blue: '#00AEEC',
        brand_blue_thin: '#DFF6FD',
        brand_blue_hover: '#40C5F1',
        brand_blue_active: '#008AC5'
      }
    }
  },
  plugins: [gridBg]
}

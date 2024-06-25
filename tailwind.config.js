/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false
  },
  content: ['./index.html', './src/**/*.{js,jsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: '#4856e9'
      }
    }
  },
  plugins: []
}

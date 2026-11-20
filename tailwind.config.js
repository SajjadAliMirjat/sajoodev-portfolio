export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    fontFamily: { sans: ['Manrope', 'system-ui', 'sans-serif'], display: ['"Space Grotesk"', 'Manrope', 'sans-serif'] },
    colors: { accent: { DEFAULT: '#4f7cff', soft: '#7c5cff', cyan: '#22d3ee' } },
  } },
  plugins: [],
}

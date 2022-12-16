module.exports = {
  content: [
    "./src/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          50: '#EFFBF6',
          100: '#AEEAD2',
          200: '#7EDDB7',
          300: '#4ED09C',
          400: '#2FB17D',
          500: '#23855E',
          600: '#1E7150',
          700: '#155139',
          800: '#0D3022',
          900: '#092017',
        },
      },
      maxWidth: {
        '8xl': '92rem',
      },
      fontFamily: {
        'sans': '"Montserrat", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
  ]
};
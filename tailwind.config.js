import form from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    form,
    typography
  ],
}


import form from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
  content: [
		"./resources/**/*.blade.php",
		 "./resources/**/*.js",
		 "./resources/**/*.vue",
		 "./vendor/robsontenorio/mary/src/View/Components/**/*.php"
	],
  theme: {
    extend: {},
  },
  plugins: [
		form,
		typography,
		require("daisyui")
	],
}


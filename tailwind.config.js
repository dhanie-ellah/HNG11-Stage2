/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        "neutral": "#808080",
        "base": "#1B1B1B",
        "primary": "#D93025",
        "blue": "#2196F3",
        "orange": "#E88A00",
        "grey": "#868686",
        "ash": "#AA9F99",
        "star": "#FFE458",
      },
    },
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
  },
}

/**
 @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.html',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'park-gray':'rgb(191, 191, 191)'
      }
    },
  },
  plugins: [
    require(
      "flowbite/plugin",
      "@tailwindcss/forms")
  ]
}

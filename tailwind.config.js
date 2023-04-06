/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'shop-grid': '3fr 1fr',
      }
    },
  },
  plugins: [require("daisyui")],
}


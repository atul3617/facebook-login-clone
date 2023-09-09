/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'custom-green':'rgb(66 183 42)',
        "custom-green1":"rgb(53,172,33)",
        'custom-blue':'rgb(35 97 233)'
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }
    }
  },
  plugins: [],
}


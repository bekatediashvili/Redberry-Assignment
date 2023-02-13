/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'green':'#4ade80',
      'red': '#dc2626',
      'violet': '#7c3aed',
      'white': '#f0f9ff',
      'blue' :'#3b82f6',
      'grey': '#374151',
      'light-gray':'#d4d4d8',
      'black':'#262626',
      'slate':'#f8fafc',


    }

  },
  // plugins: [
  //   require('@tailwindcss/forms')
  // ],
}

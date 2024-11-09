/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          'sf-pro': [
            '-apple-system',
            'BlinkMacSystemFont',
            'San Francisco',
            'SF Pro Text',
            'SF Pro Icons',
            'Helvetica Neue',
            'Helvetica',
            'Arial',
            'sans-serif'
          ],
        },
      },
    },
    plugins: [],
  }
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eaf4',
          100: '#ccd5e9',
          200: '#99abd3',
          300: '#6680bd',
          400: '#3356a7',
          500: '#002C91',
          600: '#002374',
          700: '#001a57',
          800: '#00113a',
          900: '#00091d',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e6fe',
          300: '#7cd4fd',
          400: '#36c0fb',
          500: '#0ba6e9',
          600: '#0084c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#d6b9a6',
          400: '#c59a80',
          500: '#b08969',
          600: '#8c6d56',
          700: '#775e4c',
          800: '#5e4c3e',
          900: '#3d3329',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/10013567/pexels-photo-10013567.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'safari-pattern': "url('https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'about-pattern': "url('https://images.pexels.com/photos/2662485/pexels-photo-2662485.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
    },
  },
  plugins: [],
};
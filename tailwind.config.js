/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        prim: '#008080',
        sec: '#007bFF',
        'dark-gray': '#333333',
        'neutral-gray': '#C0C0C0',
        red: '#FF4136',
        'bg-color': '#F5F5F5',
      },
    },
  },
  plugins: [],
};

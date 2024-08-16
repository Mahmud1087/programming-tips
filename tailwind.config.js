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
        languages: {
          html: 'rgb(var(--color-html) / <alpha-value>)',
          css: 'rgb(var(--color-css) / <alpha-value)',
          js: 'rgb(var(--color-js) / <alpha-value)',
          java: 'rgb(var(--color-java) / <alpha-value)',
          ruby: 'rgb(var(--color-ruby) / <alpha-value)',
          cplus: 'rgb(var(--color-cplus) / <alpha-value)',
          python: 'rgb(var(--color-python) / <alpha-value)',
        },
      },
    },
  },
  plugins: [],
};

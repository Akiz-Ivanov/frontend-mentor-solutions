export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
        'bg-bright-orange',
        'bg-dark-cyan',
        'bg-very-dark-cyan',
        'text-bright-orange',
        'text-dark-cyan',
        'text-very-dark-cyan',
        'text-transparent-white',
        'bg-very-light-gray',
        'hover:text-very-light-gray',
        'hover:outline-very-light-gray',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
  }
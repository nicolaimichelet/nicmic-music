/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            black: '#111827',
            'dark-blue': '#072f40',
            blue: '#596d97',
            'pale-blue': '#111827',
            black: '#111827',
            'sky-blue': '#86bfcb',
            'lavender-pink': '#fae8eb',
            yellow: '#ffb947',
            orange: '#ef8354',
            'extra-sky-blue': '#63E5FF',
            'text-gray': '#CCCCCC',
            'mountain-blue': '#6891D3',
            'nicmic-orange': '#CD6F39',
            'nicmic-light-blue': '#4BBFD4',
            'nicmic-black-blue': '#192744',
            'nicmic-gold': '#F8CB6E',
            'nicmic-white': '#F4F7FF',
        },
        fontFamily: {
            nobile: ['Nobile', 'sans-serif'],
        },
        extend: {},
    },
    variants: {
        fill: ['hover', 'focus'], // this line does the trick
    },
    plugins: [],
}

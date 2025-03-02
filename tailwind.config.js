/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                themeColor: '#49C7AB',
                customBlack: '#475569',
                offWhite: '#F1F5F9'
            },
            fontFamily: {
                frank: ['Frank Ruhl Libre', 'Cabinet Grotesk', 'sans-serif']
            }
        }
    },
    plugins: []
};

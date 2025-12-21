/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#5CFF6F', // Electric Green
                secondary: '#0A0A0A', // Deep Black
                surface: '#121212', // Dark Surface
                accent: '#00E0FF', // Neon Cyan
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
            }
        }
    },
    plugins: [],
}

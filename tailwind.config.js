/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-cyan': '#00f5ff',
                'neon-purple': '#a855f7',
                'neon-pink': '#ec4899',
                'neon-blue': '#3b82f6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'float': 'float 20s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)' },
                },
            },
        },
    },
    plugins: [],
}

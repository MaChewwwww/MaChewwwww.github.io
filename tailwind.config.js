/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',
        primaryDark: '#0284C7',
        accent: '#6366F1',
        background: '#06090F',
        surface: 'rgba(255,255,255,0.03)',
        mutedBorder: 'rgba(255,255,255,0.06)',
        glowEffect: 'rgba(14,165,233,0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 6px 24px rgba(14,165,233,0.12)',
        'glow-lg': '0 12px 48px rgba(14,165,233,0.15)',
      },
      borderRadius: {
        sm: '8px',
        DEFAULT: '14px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

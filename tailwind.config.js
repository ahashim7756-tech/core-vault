/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fff9e6',
          100: '#ffedb3',
          200: '#ffe180',
          300: '#ffd54d',
          400: '#ffc91a',
          500: '#e5b800',
          600: '#b39200',
          700: '#806900',
          800: '#4d4000',
          900: '#1a1600',
        },
        obsidian: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#c0c0c0',
          300: '#a0a0a0',
          400: '#808080',
          500: '#2a2a2a',
          600: '#1a1a1a',
          700: '#0f0f0f',
          800: '#080808',
          900: '#030303',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-cairo)', 'sans-serif'],
      },
      animation: {
        'vault-pulse': 'vault-pulse 3s ease-in-out infinite',
        'gold-shimmer': 'gold-shimmer 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        'vault-pulse': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(229, 184, 0, 0.15)' },
          '50%': { boxShadow: '0 0 50px rgba(229, 184, 0, 0.3)' },
        },
        'gold-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e5b800 0%, #ffd700 50%, #e5b800 100%)',
        'vault-gradient': 'radial-gradient(circle at 50% 50%, rgba(229, 184, 0, 0.1) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
};
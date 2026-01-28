export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1d2b3d',
        'brand-red': '#780000',
        'brand-blue': '#003940',
        'brand-light': '#f5f5f5',
        'brand-neon': '#00f7ff',
        'brand-purple': '#bd00ff',
      },
      fontFamily: {
        sans: ['Arvo', 'serif'],
        serif: ['Arvo', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 247, 255, 0.5), 0 0 10px rgba(0, 247, 255, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 247, 255, 0.8), 0 0 30px rgba(0, 247, 255, 0.5)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

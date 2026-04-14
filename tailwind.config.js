/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:  "#1e3a8a",
          gold:  "#f5b82e",
          coral: "#ff6b5b",
          cream: "#fdf9f0",
          ink:   "#1a1a2e",
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(26,26,46,0.18)",
        gold: "0 20px 40px -18px rgba(245,184,46,0.55)",
      },
      keyframes: {
        'pulse-ring': {
          '0%':   { transform: 'scale(0.95)', opacity: '0.7' },
          '70%':  { transform: 'scale(1.35)', opacity: '0'  },
          '100%': { transform: 'scale(1.35)', opacity: '0'  },
        },
        'float-note': {
          '0%,100%': { transform: 'translateY(0) rotate(-6deg)' },
          '50%':     { transform: 'translateY(-14px) rotate(6deg)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.215,0.61,0.355,1) infinite',
        'float-note': 'float-note 6s ease-in-out infinite',
        'fade-up':    'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}

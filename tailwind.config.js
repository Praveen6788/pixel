/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-bright': '#FFD700',
        'yellow-warm': '#FFC107',
        'yellow-soft': '#FFF59D',
        'yellow-dark': '#F57F17',
        'dark-primary': '#0F0F0F',
        'dark-secondary': '#1A1A1A',
        'dark-accent': '#2A2A2A',
        'dark-light': '#3A3A3A',
        'dark-border': '#404040',
        'gradient-start': '#1A1A1A',
        'gradient-end': '#2D2D2D',
      },
      fontFamily: {
        'modern': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scale-hover': 'scale-hover 0.3s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'scale-hover': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' }
        },
        'glow-pulse': {
          '0%': { 
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
            borderColor: 'rgba(255, 215, 0, 0.5)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)',
            borderColor: 'rgba(255, 215, 0, 0.8)'
          }
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 50%, #2A2A2A 100%)',
        'yellow-gradient': 'linear-gradient(45deg, #FFD700, #FFC107)',
        'card-gradient': 'linear-gradient(145deg, #1A1A1A 0%, #2D2D2D 100%)',
        'hover-gradient': 'linear-gradient(145deg, #2A2A2A 0%, #3A3A3A 100%)',
        'glow-gradient': 'linear-gradient(90deg, #FFD700, #FFC107, #FFD700)',
        'animated-gradient': 'linear-gradient(-45deg, #1A1A1A, #2D2D2D, #FFD700, #2D2D2D, #1A1A1A)',
      },
      backgroundSize: {
        'grid': '50px 50px',
        'animated': '400% 400%',
      },
      backgroundSize: {
        'grid': '50px 50px',
      }
    },
  },
  plugins: [],
}

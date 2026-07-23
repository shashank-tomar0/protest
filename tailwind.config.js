/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hallmark OKLCH tokens — use these in all new components
        hallmark: {
          accent: 'oklch(50% 0.2 25)',
          'accent-dark': 'oklch(40% 0.2 25)',
          'accent-glow': 'oklch(50% 0.2 25 / 0.08)',
          paper: 'oklch(98% 0.008 25)',
          'paper-alt': 'oklch(95% 0.006 25)',
          ink: 'oklch(14% 0.01 25)',
          rule: 'oklch(86% 0.005 25)',
          'rule-dark': 'oklch(25% 0.008 25)',
          muted: 'oklch(62% 0.005 25)',
          neutral: 'oklch(45% 0.008 25)',
          focus: 'oklch(55% 0.18 255)',
          'focus-alpha': 'oklch(55% 0.18 255 / 0.3)',
          gold: 'oklch(78% 0.12 85)',
          'gold-dark': 'oklch(65% 0.14 85)',
          'surface-dark': 'oklch(16% 0.012 25)',
          error: 'oklch(55% 0.2 10)',
          visited: 'oklch(45% 0.1 300)',
        },
        // Legacy cjp tokens — kept for Navbar, Footer, and other pages
        // All values updated to OKLCH with chroma > 0, tinted toward accent
        cjp: {
          primary: 'oklch(50% 0.2 25)',
          'primary-dark': 'oklch(40% 0.2 25)',
          secondary: 'oklch(14% 0.01 25)',
          accent: 'oklch(98% 0.008 25)',
          dark: 'oklch(16% 0.012 25)',
          gold: 'oklch(78% 0.12 85)',
          'gold-dark': 'oklch(65% 0.14 85)',
        },
      },
      fontFamily: {
        sans: ['Inter Tight', 'system-ui', 'sans-serif'],
        display: ['Bricolage Grotesque', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 1.2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // slate-200
        input: "var(--color-input)", // white
        ring: "var(--color-ring)", // Deep transformation blue
        background: "var(--color-background)", // Pure clarity white
        foreground: "var(--color-foreground)", // Deep constraint navy
        primary: {
          DEFAULT: "var(--color-primary)", // Deep transformation blue
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // Liberation sky blue
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-500
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // slate-100
          foreground: "var(--color-muted-foreground)", // Wisdom gray
        },
        accent: {
          DEFAULT: "var(--color-accent)", // Government gold
          foreground: "var(--color-accent-foreground)", // Deep constraint navy
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // Deep constraint navy
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // Deep constraint navy
        },
        success: {
          DEFAULT: "var(--color-success)", // emerald-500
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // amber-500
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // red-500
          foreground: "var(--color-error-foreground)", // white
        },
        trust: {
          DEFAULT: "var(--color-trust)", // Government green
          foreground: "var(--color-trust-foreground)", // white
        },
        conversion: {
          DEFAULT: "var(--color-conversion)", // Transformation red
          foreground: "var(--color-conversion-foreground)", // white
        },
        // Brand Gradient Colors
        'gradient-start': "var(--color-gradient-start)", // Constraint
        'gradient-middle': "var(--color-gradient-middle)", // Awakening
        'gradient-transform': "var(--color-gradient-transform)", // Transformation
        'gradient-end': "var(--color-gradient-end)", // Liberation
      },
      borderRadius: {
        lg: "var(--radius-lg)", // 12px
        md: "var(--radius-md)", // 8px
        sm: "var(--radius-sm)", // 4px
        xl: "var(--radius-xl)", // 16px
      },
      fontFamily: {
        'headline': ['Inter', 'sans-serif'],
        'value-prop': ['Poppins', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
        'cta': ['Montserrat', 'sans-serif'],
        'accent': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': 'var(--text-xs)', // 0.75rem
        'sm': 'var(--text-sm)', // 0.875rem
        'base': 'var(--text-base)', // 1rem
        'lg': 'var(--text-lg)', // 1.125rem
        'xl': 'var(--text-xl)', // 1.25rem
        '2xl': 'var(--text-2xl)', // 1.5rem
        '3xl': 'var(--text-3xl)', // 1.875rem
        '4xl': 'var(--text-4xl)', // 2.25rem
        '5xl': 'var(--text-5xl)', // 3rem
      },
      spacing: {
        'xs': 'var(--spacing-xs)', // 4px
        'sm': 'var(--spacing-sm)', // 8px
        'md': 'var(--spacing-md)', // 13px
        'lg': 'var(--spacing-lg)', // 21px
        'xl': 'var(--spacing-xl)', // 34px
        '2xl': 'var(--spacing-2xl)', // 55px
      },
      boxShadow: {
        'subtle': 'var(--shadow-subtle)',
        'medium': 'var(--shadow-medium)',
        'elevated': 'var(--shadow-elevated)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)', // 200ms
        'normal': 'var(--transition-normal)', // 300ms
        'slow': 'var(--transition-slow)', // 400ms
        'reveal': 'var(--transition-reveal)', // 600ms
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'moksha-shift': 'moksha-shift 45s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'slide-up': {
          from: {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'moksha-shift': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
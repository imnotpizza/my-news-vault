/** responsive threshold */
const DESKTOP_LAYOUT_THRESHOLD = '64rem';
const TABLET_LAYOUT_THRESHOLD = '48rem';
const MOBILE_LAYOUT_THRESHOLD = '13.12rem';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        desktop: { min: DESKTOP_LAYOUT_THRESHOLD },
        tablet: { min: TABLET_LAYOUT_THRESHOLD, max: DESKTOP_LAYOUT_THRESHOLD },
        mobile: { max: TABLET_LAYOUT_THRESHOLD, min: MOBILE_LAYOUT_THRESHOLD },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        /** ============ shadcn ============ */
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destrucπtive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        mnv: {
          bg: '#FAFAFA',
          white: '#FFFFFF',
          gray: {
            default: '#1A2254',
            80: '#484E76',
            40: '#A3A7BB',
            10: '#E8E9EE',
          },
          blue: {
            default: '#112EBE',
            10: '#B5BEED',
            20: '#E7EAF9',
          },
          error: '#C10606',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

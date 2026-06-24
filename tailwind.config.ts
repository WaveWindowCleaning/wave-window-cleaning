import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:        '#1A3D54',
          'navy-dark': '#0F2535',
          'navy-mid':  '#1E4F6B',
          'navy-light':'#2A6A8F',
          accent:      '#3B9FD4',
        },
        charcoal: '#111827',
        muted:    '#6B7280',
        surface:  '#F8FAFC',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0F2535 0%, #1A3D54 60%, #1E4F6B 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

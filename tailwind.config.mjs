/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#101828',
          blue: '#2563EB',
          'blue-hover': '#1D4ED8',
          cyan: '#06B6D4',
          'cyan-hover': '#0891B2',
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          text: '#101828',
          muted: '#64748B',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(16, 24, 40, 0.05), 0 1px 2px 0 rgba(16, 24, 40, 0.03)',
        card: '0 4px 6px -1px rgba(16, 24, 40, 0.05), 0 2px 4px -2px rgba(16, 24, 40, 0.05)',
        'card-hover': '0 12px 24px -4px rgba(16, 24, 40, 0.08), 0 4px 8px -4px rgba(16, 24, 40, 0.03)',
      },
    },
  },
  plugins: [],
};

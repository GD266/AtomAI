export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'Consolas',
          'Monaco',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        micro: ['0.75rem', { lineHeight: '1.4' }],
        caption: ['0.875rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.6' }],
        display: ['3.5rem', { lineHeight: '1.05' }],
      },
      backdropBlur: {
        glass: '20px',
        'glass-strong': '40px',
        'glass-subtle': '12px',
      },
    },
  },
  plugins: [],
}

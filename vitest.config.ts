import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    css: true,
    coverage: {
      reporter: ['text', 'lcov'],
      include: ['src/utils/**/*.ts', 'src/components/**/*.tsx', 'src/ProjectGantt.tsx'],
    },
  },
});

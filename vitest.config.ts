/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Use jsdom for testing React components
    globals: true, // Enable global test functions like expect
    setupFiles: './vitest.setup.ts'
  },
});
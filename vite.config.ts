import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import eslintPlugin from "@nabla/vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: {
      '@': '/src',
    }
  }
})

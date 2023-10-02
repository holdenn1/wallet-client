import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import eslintPlugin from '@nabla/vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: {
      '@': '/src',
      components: '/src/components',
      navigation: '/src/components/navigation',
      forms: '/src/components/forms',
      ui: '/src/components/UI',
      icons: '/src/assets/icons',
      widgetMenus: '/src/components/menus/widgetMenus'
    }
  }
})

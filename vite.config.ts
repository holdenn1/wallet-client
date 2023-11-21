import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import eslintPlugin from '@nabla/vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  base: "/wallet-client/",
  resolve: {
    alias: {
      '@': '/src',
      components: '/src/components',
      navigation: '/src/components/navigation',
      forms: '/src/components/forms',
      ui: '/src/components/ui',
      icons: '/src/assets/icons',
      widgetMenus: '/src/components/menus/widgetMenus'
    }
  }
})

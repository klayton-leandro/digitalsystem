import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'styles', replacement: '/src/styles' },
      { find: 'contexts', replacement: '/src/contexts' },
      { find: 'components', replacement: '/src/components' },
      { find: 'pages', replacement: '/src/pages' },
      { find: 'layouts', replacement: '/src/layouts' },
      { find: 'routes', replacement: '/src/routes' },
      { find: 'services', replacement: '/src/services' },
      { find: 'utils', replacement: '/src/utils' },
      { find: 'assets', replacement: '/src/assets' },
      { find: 'hooks', replacement: '/src/hooks' },
      { find: 'types', replacement: '/src/types' },
      { find: 'consts', replacement: '/src/consts' },
      { find: 'envs', replacement: '/src/envs' },
      { find: 'libs', replacement: '/src/libs' },
      { find: 'store', replacement: '/src/store' },
    ],
  }
})
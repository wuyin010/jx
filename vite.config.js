import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import {
	ArcoResolver
} from 'unplugin-vue-components/resolvers';

export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [
				ArcoResolver()
			],
		}),
		Components({
			resolvers: [
				ArcoResolver({
					sideEffect: true
				})
			],
		}),

	],
	server: {
		proxy: {
			'/api': {
				target: 'http://zy.xiaomaomi.cc',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})

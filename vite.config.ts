import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [
		sveltekit(),
		VitePWA(
			{
				registerType: 'autoUpdate' as const,
				manifest: {
					id: '/',
					name: 'ichipro',
					short_name: 'いちぷろ',
					description: 'The Web Portal of Hiroshima City University',
					icons: [
						{
							src: '/assets/icons/android-chrome-192x192.png',
							sizes: '192x192',
							type: 'image/png'
						},
						{
							src: '/assets/icons/android-chrome-512x512.png',
							sizes: '512x512',
							type: 'image/png'
						},
						{
							src: '/assets/icons/android-chrome-512x512.png',
							sizes: '512x512',
							type: 'image/png',
							purpose: 'any maskable'
						}
					],
					start_url: '/',
					display: 'standalone' as const,
					background_color: '#ff4102',
					theme_color: '#f8f8f8',
					lang: 'ja',
				},
				includeAssets: ["assets/*"],
				devOptions: {
					enabled: true
				}
			}
		),
	],
})

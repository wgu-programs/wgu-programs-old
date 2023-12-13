import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Structured Rapid Development',
			// logo: {
			// 	src: './src/assets/srd.svg',
			// },
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Get Started',
							link: '/guides/get-started/',
						},
					],
				},
				{
					label: 'Reference',
					autogenerate: {
						directory: 'reference',
					},
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/tailwind.css',
			],
		}),
		tailwind({
			 // Disable the default base styles:
			 applyBaseStyles: false,
		}),
	],
});

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Structured Rapid Development',
			// logo: {
			// 	src: './src/assets/srd.svg',
			// },
      site: '',
			defaultLocale: 'en',
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
					label: 'Components',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Pathways',
							link: '/components/pathways/',
						},
						{
							label: 'Courses',
							link: '/components/courses/',
						},
						{
							label: 'Competencies',
							link: '/components/competencies/',
						},
						{
							label: 'Lessons',
							link: '/components/lessons/',
						},
						{
							label: 'Units',
							link: '/components/units/',
						},
						{
							label: 'xBlocks',
							link: '/components/xblocks/',
						},
					],
				},
				{
					label: 'Patterns',
					autogenerate: {
						directory: 'patterns',
						collapsed: true
					},
				},
				// {
				// 	label: 'Sequence Patterns',
				// 	autogenerate: {
				// 		directory: 'patterns/Sequence Patterns',
				// 	},
				// 	collapsed: true,
				// },
				// {
				// 	label: 'QA Testing',
				// 	autogenerate: {
				// 		directory: 'reference',
				// 		collapsed: true,
				// 	},
				// 	badge: {
				// 		text: 'Experimental',
				// 		variant: 'caution',
				// 	},
				// },
				// {
				// 	label: 'Team Roles',
				// 	collapsed: true,
				// 	autogenerate: {
				// 		directory: 'roles',
				// 		collapsed: true,
				// 	},
				// },
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
		sitemap(),
		react(),
	],
});

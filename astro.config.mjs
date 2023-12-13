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
							label: 'Skills',
							link: '/components/skills/',
						},
					],
				},
				{
					label: 'Patterns',
					autogenerate: {
						directory: 'patterns',
					},
				},
				{
					label: 'Automated Testing',
					autogenerate: {
						directory: 'reference',
					},
				},
				{
					label: 'Roles',
					autogenerate: {
						directory: 'roles',
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

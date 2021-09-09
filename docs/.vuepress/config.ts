import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import sidebar from './sidebar'

export default defineUserConfig<DefaultThemeOptions>({
	lang: 'en-US',
	title: 'Spectera\'s Ultimate Guide',
	description: 'The Ultimate Getting-Started Guide For Spectera Bot',
  
	themeConfig: {
		logo: 'https://vuejs.org/images/logo.png',
		docsDir: 'docs',
		lastUpdated: true,
		sidebarDepth: 3,
		sidebar,
		navbar: [
			{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Guide',
				link: '/guide/'
			}
		]
	},
	plugins: [],
})
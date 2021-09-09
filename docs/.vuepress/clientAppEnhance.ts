import { defineClientAppEnhance } from '@vuepress/client';
import {
	DiscordButton,
	DiscordButtons,
	DiscordEmbed,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordInteraction,
	DiscordMarkdown,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordReaction,
	DiscordReactions,
	install as DiscordMessageComponents
} from '@discord-message-components/vue';
import '@discord-message-components/vue/dist/style.css';

export default defineClientAppEnhance(({ app }) => {
	app.use(DiscordMessageComponents, {
		avatars: {
			bot: 'https://cdn.discordapp.com/avatars/808548196308615220/03f0428c890e4e495d6ddcf0bec58826.png',
			ug: 'https://cdn.discordapp.com/avatars/564468550727761920/4eeebd7592e4a6ba948531ac9474b84a.png'
		},
		profiles: {
			user: {
				author: 'UndiedGFX',
				avatar: 'ug',
			},
			bot: {
				author: 'Spectera',
				avatar: 'bot',
				bot: true,
			},
		},
	});
	app.component('DiscordButton', DiscordButton);
	app.component('DiscordButtons', DiscordButtons);
	app.component('DiscordEmbed', DiscordEmbed);
	app.component('DiscordEmbedField', DiscordEmbedField);
	app.component('DiscordEmbedFields', DiscordEmbedFields);
	app.component('DiscordInteraction', DiscordInteraction);
	app.component('DiscordMarkdown', DiscordMarkdown);
	app.component('DiscordMention', DiscordMention);
	app.component('DiscordMessage', DiscordMessage);
	app.component('DiscordMessages', DiscordMessages);
	app.component('DiscordReaction', DiscordReaction);
	app.component('DiscordReactions', DiscordReactions);
})
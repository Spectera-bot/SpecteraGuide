# Getting Started

Hello, assuming you are really new to the bot we will start with the very basics  
To check the bot's latency, you do:

<DiscordMessages>
	<DiscordMessage profile="user">
	s!ping
	</DiscordMessage>
	<DiscordMessage profile="bot" edited="true">
		<template #interactions>
			<DiscordInteraction profile="user" :highlight="true">s!ping</DiscordInteraction>
		</template>
		Pong! Bot Latency 315ms. API Latency 570ms.
	</DiscordMessage>
</DiscordMessages>

:::tip
Spectera uses `s!` as a default prefix but you can also use the regex prefix (if you know how RegExp's work) too `^(hey +)?(spectera)[,! ]`
:::

:::danger
You should always use the recommended invite link to invite Spectera, or else she will not work as expected
:::

## Configuring the bot
Now as you know how to use Spectera you should also know how to configure spectera  
Firstly you have to set Moderator roles, or else you would get errors like '... cannot use this command' on moderators of your server  

<DiscordMessages>
	<DiscordMessage profile="user">
	s!modroles set role1 role2 ...
	</DiscordMessage>
	<DiscordMessage profile="bot">
		<template #interactions>
			<DiscordInteraction profile="user" :highlight="true">s!modroles set role1 role2 ...</DiscordInteraction>
		</template>
		Successfully set modroles for this server!
	</DiscordMessage>
</DiscordMessages>

:::tip
Note, You have to replace role1, role2 with either role itself or roleId, You can pass as many roles as you want in the command.
:::

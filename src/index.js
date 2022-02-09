const { Client, Collection, Intents } = require('discord.js')

const config = require('./shared/configs')
const bot = require('./discord/bot')
const commandFiles = require('./discord/commandLoader')

const client = new Client({intents: [Intents.FLAGS.GUILDS]})

client.commands = new Collection()

for (const file of commandFiles) {
	const command = require(`./discord/commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

bot.start(config.BOT_TOKEN, config.BOT_CLIENT_ID, config.GUILD_ID)
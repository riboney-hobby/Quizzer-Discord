const {Client, Intents } = require('discord.js')

const registerCommands = require('./commandsRegisterer')
const { clientCommands } = require('./commandLoader')


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = clientCommands

const afterStartup = () => {
	// eslint-disable-next-line no-unused-vars
	return new Promise((resolve, _reject) => {
		// When the client is ready, run this code (only once)
		client.once('ready', () => console.log('Ready!'));

		client.on('interactionCreate', async interaction => {
			if (!interaction.isCommand()) return;

			const command = client.commands.get(interaction.commandName);

			if (!command) return

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(error);
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		})

		resolve()
	})
}

// Login to Discord with your client's token
const start = async (token, botID, guildID) => {
    
	try{
		const res = await Promise.all([
			registerCommands(token, botID, guildID),
			client.login(token),
			afterStartup()
		])

		return res
	} catch(err){
		console.error(`Error: ${err.msg}\n`)
		throw err
	}
}

const destroy = () => {
	client.destroy()
	console.log('Discord bot closed!')
}

module.exports = {
    start,
	destroy
}
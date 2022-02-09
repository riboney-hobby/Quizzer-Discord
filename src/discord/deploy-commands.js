const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const commandFiles = require('./commandLoader')

const commands = []


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const deployCommands = async (token, botID, guildID) => {
    const rest = new REST({ version: '9' }).setToken(token);

    try{
        await rest.put(Routes.applicationGuildCommands(botID, guildID), { body: commands })
        console.log('Successfully registered application commands.')
    } catch(err){
        console.log('Error in deploy commands!')
        throw err
    }
}

module.exports = deployCommands
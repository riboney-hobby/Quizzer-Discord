const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());


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
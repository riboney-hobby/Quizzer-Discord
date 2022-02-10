const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { commandsJSON } = require('./commandLoader')

const registerCommands = async (token, botID, guildID) => {
    const rest = new REST({ version: '9' }).setToken(token);

    try{
        await rest.put(Routes.applicationGuildCommands(botID, guildID), { body: commandsJSON })
        console.log('Successfully registered application commands.')
    } catch(err){
        console.log('Error in deploy commands!')
        throw err
    }
}

module.exports = registerCommands
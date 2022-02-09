const { SlashCommandBuilder } = require('@discordjs/builders')

const data = new SlashCommandBuilder()
    .setName('server')
    .setDescription('Replies with server info')

const execute = async (interaction) => 
    await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`)

module.exports = {
    data: data,
    execute: execute
}
const { SlashCommandBuilder } = require('@discordjs/builders')

const data = new SlashCommandBuilder()
    .setName('user')
    .setDescription('Replies with user info!')

const execute = async (interaction) => 
await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`)

module.exports = {
    data: data,
    execute: execute
}
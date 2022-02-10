const fs = require('fs')
const path = require('path')
const { Collection } = require('discord.js')

const commandPaths = path.join(__dirname, './commands')

const commandFiles = fs.readdirSync(commandPaths).filter(file => file.endsWith('.js'))

const commands = 
  (() => commandFiles.map(file => 
    require(path.join(commandPaths, file))))()

const clientCommands = (() => {
    const cc = new Collection()
    commands.forEach(c => cc.set(c.data.name, c))
    return cc
})()

const commandsJSON = commands.map(c => c.data.toJSON())

module.exports = {
    commands,
    clientCommands,
    commandsJSON
}

const fs = require('fs')
const path = require('path')

const commands = path.join(__dirname, './commands')

module.exports =  fs.readdirSync(commands).filter(file => file.endsWith('.js'))

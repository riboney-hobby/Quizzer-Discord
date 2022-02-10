const bot = require('../src/discord/bot')
const config = require('../src/shared/configs')

let botStartup 

beforeAll(async () => {
    botStartup = await bot.start(config.BOT_TOKEN, config.BOT_CLIENT_ID, config.GUILD_ID)
})

test('Success: Discord bot starts up', async () => {
    expect(botStartup).toBeTruthy()
})

afterAll(async () => {
    const pause = (ms) => new Promise((res) => setTimeout(res, ms));
    await pause(1000);
    bot.destroy()
})

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log('البوت يعمل الآن ومستعد للانطلاق!');
});

client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('البوت يعمل بكفاءة!');
    }
});

client.login(process.env.TOKEN);

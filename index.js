const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });
client.commands = new Collection();

const commandFiles = fs.readdirSync('./').filter(file => file.endsWith('.js') && file !== 'index.js');
for (const file of commandFiles) {
    const command = require(`./${file}`);
    client.commands.set(command.name, command);
}

client.on('messageCreate', (message) => {
    if (!message.content.startsWith('!') || message.author.bot) return;
    const args = message.content.slice(1).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    if (command) command.execute(message, args);
});

client.login(process.env.TOKEN);

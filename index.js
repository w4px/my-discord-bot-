require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] 
});

// نظام إدارة الأوامر (لضمان عدم تداخل الأوامر)
client.commands = new Collection();

// اختصارات الكلام (خاصة بكل سيرفر إن أردت)
client.shortcuts = {
    '!قوانين': 'يرجى مراجعة القوانين في قناة #القوانين',
    '!رابط': 'رابط السيرفر هو: ...'
};

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    // تشغيل الاختصارات
    if (client.shortcuts[message.content]) {
        message.reply(client.shortcuts[message.content]);
    }

    // هنا يتم إضافة منطق أوامر الإدارة (باند/كيك) والألعاب
});

client.login(process.env.TOKEN);

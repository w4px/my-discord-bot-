require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// إعدادات الصلاحيات للبوت ليتمكن من قراءة الرسائل
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});

// رسالة عند تشغيل البوت
client.once('ready', () => {
    console.log(`تم تسجيل الدخول بنجاح باسم ${client.user.tag}!`);
});

// الرد على الرسائل
client.on('messageCreate', (message) => {
    // تجاهل رسائل البوت نفسه
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply('البوت يعمل بكفاءة!');
    }
});

// تسجيل الدخول باستخدام التوكن من إعدادات Render
client.login(process.env.TOKEN);

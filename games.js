module.exports = {
    name: 'game',
    execute(message, args) {
        if (args[0] === 'roll') {
            message.reply(`🎲 النتيجة: ${Math.floor(Math.random() * 6) + 1}`);
        } else if (args[0] === 'coin') {
            message.reply(Math.random() > 0.5 ? '🪙 رأس' : '🪙 كتابة');
        }
    }
};

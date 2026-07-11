module.exports = {
    name: 'roll',
    execute(message, args) {
        const result = Math.floor(Math.random() * 6) + 1;
        message.reply(`🎲 طلعت لك: ${result}`);
    }
};

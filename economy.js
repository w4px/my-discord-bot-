// نظام بسيط للبنك
let bank = {};
module.exports = {
    name: 'bank',
    execute(message, args) {
        const id = message.author.id;
        bank[id] = (bank[id] || 0) + 100;
        message.reply(`تم إضافة 100 رصيد. رصيدك الحالي: ${bank[id]}`);
    }
};

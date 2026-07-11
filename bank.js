const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
    name: 'bank',
    async execute(message, args) {
        const userId = message.author.id;
        const subCommand = args[0]; // (balance, deposit, withdraw, transfer)

        // 1. عرض الرصيد
        if (!subCommand || subCommand === 'balance') {
            let balance = await db.get(`balance_${userId}`) || 0;
            return message.reply(`💰 رصيدك الحالي هو: **${balance}**`);
        }

        // 2. إيداع (مثال: !bank deposit 100)
        if (subCommand === 'deposit') {
            const amount = parseInt(args[1]);
            if (!amount || amount <= 0) return message.reply('❌ يرجى تحديد مبلغ صحيح.');
            
            await db.add(`balance_${userId}`, amount);
            return message.reply(`✅ تم إيداع ${amount} في حسابك.`);
        }

        // 3. تحويل (مثال: !bank transfer @user 50)
        if (subCommand === 'transfer') {
            const target = message.mentions.members.first();
            const amount = parseInt(args[2]);

            if (!target) return message.reply('❌ حدد الشخص الذي تريد التحويل له.');
            if (!amount || amount <= 0) return message.reply('❌ حدد مبلغاً صحيحاً.');

            let senderBalance = await db.get(`balance_${userId}`) || 0;
            if (senderBalance < amount) return message.reply('❌ رصيدك غير كافٍ!');

            await db.sub(`balance_${userId}`, amount);
            await db.add(`balance_${target.id}`, amount);
            return message.reply(`💸 تم تحويل ${amount} إلى ${target.user.username}`);
        }
    }
};

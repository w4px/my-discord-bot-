const { QuickDB } = require('quick.db');
const db = new QuickDB();
module.exports = {
    name: 'streak',
    async execute(message) {
        const userId = message.author.id;
        let streak = await db.get(`streak_${userId}`) || 0;
        streak++;
        await db.set(`streak_${userId}`, streak);
        message.reply(`🔥 ستريكك الحالي: ${streak} أيام!`);
    }
};

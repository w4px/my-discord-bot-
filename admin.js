module.exports = {
    name: 'admin',
    execute(message, args) {
        if (!message.member.permissions.has('Administrator')) return;
        const action = args[0];
        const target = message.mentions.members.first();
        if (!target) return;
        if (action === 'ban') target.ban();
        if (action === 'kick') target.kick();
        message.reply(`تم تنفيذ ${action} على ${target.user.tag}`);
    }
};

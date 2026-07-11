module.exports = {
    name: 'admin',
    execute(message, args) {
        if (!message.member.permissions.has('Administrator')) return message.reply('صلاحياتك لا تسمح!');
        const action = args[0]; // ban or kick
        const target = message.mentions.members.first();
        if (!target) return message.reply('حدد العضو!');
        
        if (action === 'ban') target.ban();
        if (action === 'kick') target.kick();
        message.reply(`تم تنفيذ ${action} بنجاح.`);
    }
};

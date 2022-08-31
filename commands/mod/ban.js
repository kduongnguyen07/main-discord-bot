

module.exports = {
    name : 'ban',
    run :async(cilent ,message ,args) => {
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send ('I do not have permission ');
        const Member = message.mentions.members.first()
        if (!Member) return message.channel.send ('Please specify a member to ban');
        await Member.ban({reason :args.slice(1).join("")})
        message.channel.send(`**${Member.user.tag}** has been banned from **${message.guild.name}**. Bye bye!`)
        

    }
}

module.exports = {
    name : 'kick',
    run :async(cilent ,message ,args) => {
        if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send ('I do not have permission ');
        const Member = message.mentions.members.first()
        if (!Member) return message.channel.send ('Please specify a member to kick');
        await Member.kick({reason :args.slice(1).join("")})
        message.channel.send(`**${Member.user.tag}** has been kicked from **${message.guild.name}**. Bye bye!`)
        

    }
}
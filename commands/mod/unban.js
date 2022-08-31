const { Client, Message, MessageEmbed } = require("discord.js");
module.exports = {
    name : "unban",
    userPermissions:["BAN_MEMBERS"],
    /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
    run :async(cilent ,message ,args) => {
       if (!message.member.permissions.has("BAN_MEMBERS")) return;
       const id =args[0];
       if (!id) return message.reply("Please enter the user's id")
       const bannedMembers = await message.guild.fetchBans();
       if (!bannedMembers.find((user) => user.user.id === id))
            return message.reply("User is not banned");
        message.guild.members.unban (id);
        message.reply ("Unbanned");    
        

    },
};
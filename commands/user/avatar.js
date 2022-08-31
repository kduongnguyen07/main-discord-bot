const {Client,Message,MessageEmbed} = require ('discord.js');
const avatarEmbed = require('discord.js-avatar');
module.exports ={
    name:"avatar",
    aliases : ['ava'],
    /**
     *@param {Cilent} client
     *@param {Message} message
     *@param {String[]} args
     */
    run :async   (client,message,args) => {
        const member = message.mentions.members.first() || message.member;
        message.channel.send(
            new MessageEmbed()
                .setTitle(`${member.user.tag}'s avatar`)
                .setImage(member.user.displayAvatarURL({dynamic:true,size:1024}))
                .setColor("Blue")
        );
    },
};
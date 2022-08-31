const Discord = require('discord.js')

module.exports = {
    name: "simp",
    category: "Fun",
    description: "How much of a simp are you?",
    usage: "[command | user]",
    author: "[kduongnguyen07]",
    run: async(client, message, args) => {
        const mentionedMember = message.mentions.users.last()
        if (!mentionedMember) return message.channel.send('Please mention a user!')
        const simpr8 = Math.floor(Math.random() * 100) + 0;
        const embed = new Discord.MessageEmbed()
           .setTitle(`Simp machine`)
           .setDescription(`:shrimp:  ${mentionedMember} is ${simpr8}% simp`)
           .setColor(`RANDOM`)
           .setImage('https://c.tenor.com/4EChuFvAcJQAAAAC/anime-slap.gif')
           message.channel.send(embed)
    }
}
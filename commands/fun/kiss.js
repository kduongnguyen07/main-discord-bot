const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js");
module.exports = {
  name: "kiss",
  category: "Fun",
  description: "kiss someone",
  usage: "[command]+[user]",
  timeout: 5000,
  author: "[kduongnguyen07]",
  run: async(client, message, args) => {
    const member = message.mentions.members.last();
    if (!member)
      return message.channel.send(`Who do you want to kiss??`)
    let url = await neko.sfw.kiss()
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<@${member.user.id}>, you got a kiss from ${message.author.username}  ( =ω=)`)
    .setImage(url.url) 
    message.channel.send(embed)
  }
}
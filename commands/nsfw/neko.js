
   
const client = require('nekos.life');
const {MessageEmbed} = require('discord.js')
const neko = new client();
const prefix = require('./../../index')

module.exports = {
  name: "neko",
  aliases: ['picneko'],
  category: "nsfw",
  description: "Bổ mắt B)",

  usage: "neko",
  
  async execute(client, message, args) {  
    if (!message.channel.nsfw){
    let owo = neko.sfw.neko();
    const hentai = new MessageEmbed()   
        .setColor('RANDOM')
        .setImage((await owo).url)
        .setTimestamp()
        .setFooter('Wyn iz best', message.author.avatarURL({ dynamic: true }));
    message.channel.send({embeds: [hentai]});
    }
    else{
    let owo = neko.nsfw.neko();
    const hentai = new MessageEmbed()   
        .setColor('RANDOM')
        .setImage((await owo).url)
        .setTimestamp()
        .setFooter('Wyn iz best', message.author.avatarURL({ dynamic: true }));
    message.channel.send({embeds: [hentai]});
    }



      
}
 };

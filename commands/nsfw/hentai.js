
   
const client = require('nekos.life');
const {MessageEmbed} = require('discord.js')
const neko = new client();
const prefix = require('./../../index')

module.exports = {
  name: "hentai",
  aliases: ['hent'],
  category: 'nsfw',
  description: "Bổ mắt B)",
  usage: "hentai",
  run: async (client, message, args) => {
  
  const NSFW = "❌Vui lòng xuống NSFW channel để dùng lệnh này!";
  if (!message.channel.nsfw) {
    message.react('❌');
    return message.reply(NSFW)
   
  }

       
    let owo = neko.nsfw.hentai();
    
    const hentai = new MessageEmbed()
        
        .setColor('RANDOM')
        .setImage((await owo).url)
        .setTimestamp()
        .setFooter('Wyn iz best', message.author.avatarURL({ dynamic: true }));
        
    message.channel.send(hentai);




      
}
 };
// https://github.com/nyekuuu/Dorito-bot-discord.js/tree/master/commands
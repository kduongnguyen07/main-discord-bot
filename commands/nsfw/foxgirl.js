const prefix = require('./../../index')
   
const client = require('nekos.life');
const {MessageEmbed} = require('discord.js')
const neko = new client();

module.exports = {
  name: "foxgirl",
  aliases: ['caoxinh'],
  category: "FUN",
  category: 'nsfw',
  description: "Bổ mắt B)",
  usage:'foxgirl',
  
  run: async (client, message, args)=> {  
    if (!message.channel.nsfw){
    let owo = neko.sfw.foxGirl();
    const hentai = new MessageEmbed()  
        .setAuthor('a')
        .setColor('RANDOM')
        .setImage((await owo).url)
        .setTimestamp()
        .setFooter('Wyn iz best', message.author.avatarURL({ dynamic: true }));
    message.channel.send(hentai);
    }

   
}
 };

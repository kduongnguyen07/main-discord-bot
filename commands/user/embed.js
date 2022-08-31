const {MessageEmbed} = require('discord.js')
module.exports ={
    name:'embed',
    run : async(cilent,message) => {
        const embed = new MessageEmbed()
        .setTitle ('LCS Dwong #2027')
        .setDescription('https://khanhdn.tk')
        .setColor('7ba4ee')
        .setThumbnail(`https://cdn.discordapp.com/attachments/855845963997642752/959721789502656562/Toi_gian_2.jpg`)
        message.channel.send(embed)
    }
}
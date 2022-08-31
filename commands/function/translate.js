const translate = require('translate-google')
const { Client, Message, MessageEmbed } = require("discord.js");
module.exports= {
    name : 'transvn',
    aliases : ['translate'],
    /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
    run : async(client, message, args) => {
        translate(args.join(" "), {to : 'vi'}).then(res => {
            message.channel.send(res)
        })
    }
}
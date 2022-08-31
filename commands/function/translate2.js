const translate = require('translate-google')
const { Client, Message, MessageEmbed } = require("discord.js");
module.exports= {
    name : 'transen',
    aliases : ['translate2'],
    /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
    run : async(client, message, args) => {
        translate(args.join(" "), {to : 'en'}).then(res => {
            message.channel.send(res)
        })
    }
}
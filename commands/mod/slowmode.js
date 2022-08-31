const { Client , Message , MessageEmbed } = require ("discord.js");
const ms = require ('ms');
module.exports = {
    name:"slowmode",
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args
     */
    run:async (client,message,args) => {
        if (!message.member.permissions.has('MANAGE_CHANNELS')) return;
        if (!args[0]) {
            message.channel.setRateLimitPerUser(0);
            return message.channel.send('The slowmode has been removed!')
        }
        const raw =args[0];
        const milliseconds = ms(raw);
        if (isNaN(milliseconds)) return message.reply('This is not a valid time');
        if (milliseconds<100) return message.reply ('The minimum slowmode is 1s');
        message.channel.setRateLimitPerUser(milliseconds/1000);
        message.channel.send(
            `The slowmode on this channel has been set to ${ms(milliseconds,{
                long:true
            })}`
        )
    }
}
const {Collection, Client, Discord, MessageEmbed} = require('discord.js')
const fs = require('fs')
const khanh = "748799374628356126" ;
const keepAlive = require("./server");
const client = new Client({
    disableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.on("messageCreate", message => {
    
    const id = message.mentions.users.first()?.id;
    if(id == khanh){
        const me = new MessageEmbed()
        .setDescription(`Đang bận rồi <@!${id}> \nTí check sau ${message.author} 💻`)
        .setThumbnail("https://media.discordapp.net/attachments/920183137881980968/936635757542637678/nino_hon.gif");
        message.channel.send({embeds: [me]}).then(m => {setTimeout(() => m.delete(), 1000)})
    }
    if (message.mentions.author) return message.channel.send(`ping lam gi`);
    if (message.author.bot || message.channel.type == "DM" || !message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLocaleLowerCase();

    const cmdname = client.commands.get(cmd) || client.commands.find(cmdname => cmdname.aliases && cmdname.aliases.includes(cmd));
    if (args === 0) return;
    try{
        cmdname.execute(client, message, args);
    } catch (e) {
        //console.log(e);
       // message.reply({content: "Lệnh " + cmd + " đã xảy ra lỗi, thử lại sau!", allowedMentions: {repliedUser: false}});
    }
    let command = client.commands.get(cmd);
    if (command){
        if (command.category === 'music' && !message.member.voice.channel) return message.channel.send('Vui lòng vào room voice để có thể dùng lệnh !')
    }      
});
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    client.user.setActivity(`${prefix}help`)
    console.log(`${client.user.username} ✅`)
})
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})
client.on('guildMemberAdd',async(member) => {
    const Channel = member.guild.channels.cache.get('998125907967496203')
    const embed = new MessageEmbed()
    .setTitle ('Hello')
        .setDescription(`Welcome **${member.displayName}**, we now have ${member.guild.memberCount} members`)
        .setColor('7ba4ee')
        .setThumbnail(`https://media.giphy.com/media/sMk1AjUDu9b2w/giphy.gif`)
    Channel.send(embed)
})
client.on('guildMemberRemove',async(member) => {
    const Channel = member.guild.channels.cache.get('998125907967496203')
    const embed = new MessageEmbed()
    .setTitle ('Goodbye')
        .setDescription(`Goodbye **${member.displayName}**, we now have ${member.guild.memberCount} members`)
        .setColor('7ba4ee')
        .setThumbnail(`https://cdn.weeb.sh/images/B1NwJg9Jz.gif`)
    Channel.send(embed)
})
client.login(token)
keepAlive();
const nhentai = require('nhentai');
const api = new nhentai.API();
const {MessageEmbed} = require('discord.js')
function wait(ms){
  let batdau = new Date().getTime();
  let ketthuc = batdau;
  while(ketthuc < batdau + ms){
      ketthuc = new Date().getTime();
  }
}

module.exports = {
    name: 'nhentai',
    category: 'nsfw',
    description: "Bổ mắt",
    aliases : ['nh','nhen'],
    usage: "nhentai (code)",
    
    async execute(client,message,args) { 
    try{
    const nsfw =await api.fetchDoujin(`${args}`)
    if(!nsfw) {
      return message.reply(`Vui lòng nhập code hợp lệ !`)
    }
    if(!message.channel.nsfw) return message.reply(`Vui lòng vào kênh nsfw để dùng lệnh này`)
    const embed = new MessageEmbed()
    .setDescription(nsfw.tags.all.map(tag => tag.name).join(', '))
    .setAuthor(nsfw.titles.pretty)
    .setImage(nsfw.cover.url)
    .setThumbnail(nsfw.cover.url)
    .setTimestamp()
    .setFooter(`Wyn iz best`, message.author.avatarURL({ dynamic: true }));
    message.channel.send({embeds: [embed]});
    const maxpage = nsfw.raw.num_pages;
    
    if(maxpage > 50) return message.channel.send(`${message.author}, vì số trang quá lớn \`>50 trang\` nên bạn hãy ấn vào link này để đọc:` +"\n ||" + `${nsfw.url}`+ "||" )

    for(var i = 0; i < maxpage; i++){
      message.channel.send(`Trang ${i+1} / ${maxpage}`)
      message.channel.send(nsfw.pages[i].url )
      await wait(3000)
    }
    return;
    }catch(e){
      console.log(e);
      message.channel.send(`Bot lỗi vui lòng thử lại`)
    }
  }
}

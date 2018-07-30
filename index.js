const Discord = require('discord.js');
const prefix = '.'
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




 client.on('message', message => { 
if(message.content.startsWith(prefix + 'sg')) {
      if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
   let args = message.content.split(" ").slice(1);
   var ID = message.author.id 
   var emben = new Discord.RichEmbed()
   .setTimestamp()
   .setTitle(`:x: Error`)
   .setDescription(`الرجاء كتابت إقتراحك بعد الأمر `)
   if(!args.join(" ")) return message.channel.send(emben).then(message => {message.delete(50000)});
   var embet = new Discord.RichEmbed()
   .setTitle(`:white_check_mark: Success!`)
   .setTimestamp()
   .setDescription(`شكراً على اقتراحك !`)
.addField(`إقتراحك : `,args.join(" "))
   var embed = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
   .setFooter(`${message.author.username}#${message.author.discriminator}`)
   .setTitle(`${client.user.username}`)
   .setURL(`${client.user.avatarURL}`)
   .setDescription(`**
__المقترح__ :\n <@${ID}>\n
__الإقتراح__ :  \`\`\`${args.join(" ")}\`\`\`**`)
           client.channels.get("473520785915641866").send(embed)
  message.channel.sendEmbed(embet).then(message => {message.delete(50000)})
            message.react("📩")
}
});

 client.on('message', message => { 
if(message.content.startsWith(prefix + 'jos')) {
      if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
   let args = message.content.split(" ").slice(1);
   var ID = message.author.id 
   var emben = new Discord.RichEmbed()
   .setTimestamp()
   .setTitle(`:x: Error`)
   .setDescription(` (الرجاء كتابت التقديم بعد الأمر من ( أسم , عمر , أسم في ماين كرافت `)
   if(!args.join(" ")) return message.channel.send(emben).then(message => {message.delete(50000)});
   var embet = new Discord.RichEmbed()
   .setTitle(`:white_check_mark: Success!`)
   .setTimestamp()
   .setDescription(`سوف يتم قبولك خلال 24 ساعة !`)
.addField(`تقديمك : `,args.join(" "))
   var embed = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
   .setFooter(`${message.author.username}#${message.author.discriminator}`)
   .setTitle(`${client.user.username}`)
   .setURL(`${client.user.avatarURL}`)
   .setDescription(`**
__المقدم__ :\n <@${ID}>\n
__االمعلومات__ :  \`\`\`${args.join(" ")}\`\`\`**`)
           client.channels.get("473520785915641866").send(embed)
  message.channel.sendEmbed(embet).then(message => {message.delete(50000)})
            message.react("📩")
}
});

client.login(process.env.BOT_TOKEN);

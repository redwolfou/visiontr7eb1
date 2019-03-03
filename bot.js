const Discord = require("discord.js");
const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');
const client = new Discord.Client();


client.on('guildMemberAdd', member => {
var channel = member.guild.channels.find('551433744527917066');
    if(!channel) return;
 setTimeout(() => {
channel.send('**WELCOME TO Vision.**')
}, 3000,);
})

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء

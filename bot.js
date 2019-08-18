
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";


    client.on("messageReactionAdd", (reac, user)=> {

    
      let member = reac.message.guild.member(user);

      let rolemember = reac.message.guild.roles.find("name", "member");

      
        if(member.hasPermission("ADMINISTRATOR")) return ;
        if(member.roles.has(rolemember)) return ;
        member.addRole('612635039242649600');
      

    })


client.login(process.env.BOT_TOKEN);


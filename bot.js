
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";


    client.on("messageReactionAdd", reac => {
    
      let member = reac.message.member

      let rolemember = reac.message.guild.roles.find("name", "member");

      
        if(member.hasPermission("ADMINISTRATOR")) return ;
        if(member.roles.has(rolemember)) return ;
        member.addRole('612601847634591753');
      

    })


client.login(process.env.BOT_TOKEN);



const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";


    client.on("messageReactionAdd", (reac, user)=> {

    
      let member = reac.message.guild.member(user);

      let rolemember = reac.message.guild.roles.find("name", "Member");

      
        if(member.hasPermission("ADMINISTRATOR")) return ;
        if(member.roles.find(x=> x.id === rolemember.id)) return ; 
        member.addRole('612638605550288899');
      

    })


client.login(process.env.BOT_TOKEN);


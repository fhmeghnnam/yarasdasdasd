
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";          //    Token Here
//    Add emoji name

//    Add role name
client.on("messageReactionAdd", function(users) {
users.addRole(users.guild.roles.find("id", 612601847634591753));
users.removeRole(users.guild.roles.find("id", 612601847634591753));
});

client.login(process.env.BOT_TOKEN);

